import React from "react";
import { Helmet } from "react-helmet";
import { Button, Heading, Text, Img } from "../components";
import LUS70OneScheduled from "../components/LUS70OneScheduled/index";
import LUS70OneTaskhistory from "../components/LUS70OneTaskhistory";
import LUS70OneTaskhistory1 from "../components/LUS70OneTaskhistory1";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";

export default function LUS70OnePage() {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <>
      <Helmet>
        <title>AMITBEJ</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="w-full bg-white-A700 pb-[42px] md:pb-5">
        <div className="flex flex-col gap-8">
          <header className="border-b border-solid border-gray-400 bg-white-A700 p-7 sm:p-5">
            <div>
              <div className="flex items-center justify-between gap-5">
                <Heading size="lg" as="h2">
                  ABCHotel
                </Heading>
                <div className="flex w-[10%] justify-between gap-5">
                  <Img
                    src="images/img_notification.svg"
                    alt="notification"
                    className="h-[48px] w-[48px]"
                  />
                  <Img
                    src="images/img_ellipse_185.png"
                    alt="circleimage"
                    className="h-[48px] w-[48px] rounded-[50%]"
                  />
                </div>
              </div>
            </div>
          </header>
          <div className="flex w-[96%] items-start gap-[31px] md:w-full md:flex-col md:p-5">
            <Sidebar
              width="226px !important"
              collapsedWidth="80px !important"
              collapsed={collapsed}
              className="!sticky top-0 flex h-screen flex-col overflow-auto bg-white-A700 py-[5px] md:hidden"
            >
              <Menu
                menuItemStyles={{
                  button: {
                    padding: 0,
                    gap: "12px",
                    alignSelf: "start",
                    color: "#1a0a02",
                    fontWeight: 600,
                    fontSize: "16px",
                    borderColor: "transparent",
                    borderBottomWidth: "5px",
                    borderStyle: "normal",
                    paddingLeft: "32px",
                    paddingRight: "32px",
                    [`&:hover, &.ps-active`]: {
                      borderColor: "#dc5b19",
                      backgroundColor: "#f0f0f0 !important",
                    },
                  },
                }}
                rootStyles={{ ["&>ul"]: { gap: "41.00px" } }}
                className="mb-[624px] flex w-full flex-col self-stretch pb-4"
              >
                <MenuItem
                  icon={
                    <Img
                      src="images/img_guc153_black_900.svg"
                      alt="guc153_one"
                      className="h-[24px] w-[24px]"
                    />
                  }
                >
                  Home
                </MenuItem>
                <MenuItem
                  icon={
                    <Img
                      src="images/img_guc153_black_900_24x24.svg"
                      alt="guc153_three"
                      className="h-[24px] w-[24px]"
                    />
                  }
                >
                  Console
                </MenuItem>
                <MenuItem
                  icon={
                    <Img
                      src="images/img_guc153_24x24.svg"
                      alt="guc153_five"
                      className="h-[24px] w-[24px]"
                    />
                  }
                >
                  Attendance
                </MenuItem>
                <MenuItem
                  icon={
                    <Img
                      src="images/img_guc153.svg"
                      alt="guc153_seven"
                      className="h-[24px] w-[24px]"
                    />
                  }
                >
                  Overview
                </MenuItem>
                <MenuItem
                  icon={
                    <Img
                      src="images/img_guc153_1.svg"
                      alt="guc153_nine"
                      className="h-[24px] w-[24px]"
                    />
                  }
                >
                  Staff
                </MenuItem>
              </Menu>
            </Sidebar>
            <div className="flex flex-1 flex-col gap-6 md:self-stretch">
              <div className="flex">
                <Heading size="md" as="h1">
                  Tasks of the day
                </Heading>
              </div>
              <div className="flex w-[50%] gap-2 md:w-full sm:flex-col">
                <Button
                  color="gray_400"
                  size="sm"
                  variant="outline"
                  className="min-w-[114px] rounded-[14px]"
                >
                  Not Accepted
                </Button>
                <Text
                  size="md"
                  as="p"
                  className="rounded-[14px] border border-solid border-gray-400 px-2 pb-0.5 pt-[7px]"
                >
                  Ongoing
                </Text>
                <Button
                  color="gray_400"
                  size="sm"
                  variant="outline"
                  className="w-full flex-1 rounded-[14px] sm:self-stretch"
                >
                  Scheduled
                </Button>
                <Button
                  color="gray_400"
                  size="sm"
                  variant="outline"
                  className="min-w-[94px] rounded-[14px]"
                >
                  Completed
                </Button>
                <div className="flex gap-2">
                  <Button
                    color="gray_400"
                    size="sm"
                    variant="outline"
                    className="min-w-[75px] rounded-[14px]"
                  >
                    Delayed
                  </Button>
                  <Button
                    color="gray_400"
                    size="sm"
                    variant="outline"
                    className="min-w-[70px] rounded-[14px]"
                  >
                    Ontime
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-[repeat(auto-fill,_minmax(344px_,_1fr))] gap-6">
                <div className="flex w-full flex-col gap-[11px] rounded-[12px] border border-solid border-gray-400 bg-white-A700 p-2">
                  <div className="flex items-center justify-between gap-5">
                    <div className="flex flex-1 items-center gap-1">
                      <div className="flex w-[40%] items-center justify-center gap-[5px] rounded bg-gray-100">
                        <div className="flex flex-col items-center rounded-sm bg-white-A700 p-px">
                          <Img
                            src="images/img_user.svg"
                            alt="rajesh_one"
                            className="h-[12px] w-[12px]"
                          />
                        </div>
                        <Heading as="h2" className="self-end">
                          Rajesh
                        </Heading>
                        <div className="h-[8px] w-[8px] rounded bg-deep_orange-900" />
                      </div>
                      <Text
                        as="p"
                        className="flex h-[23px] items-center justify-center rounded-[11px] bg-gray-100 px-2 py-1 !text-deep_orange-900"
                      >
                        Not Accepted
                      </Text>
                      <div className="flex rounded-[10px] bg-gray-100 p-0.5">
                        <Img
                          src="images/img_microphone.svg"
                          alt="rajesh_four"
                          className="h-[14px] w-[14px]"
                        />
                      </div>
                    </div>
                    <div className="flex">
                      <Button
                        color="teal_50"
                        shape="round"
                        leftIcon={
                          <Img
                            src="images/img_accesstime.svg"
                            alt="access_time"
                            className="h-[16px] w-[16px]"
                          />
                        }
                        className="min-w-[74px] gap-1 font-montserrat"
                      >
                        20min
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-5">
                    <Heading size="s" as="h3">
                      Routine Cleaning
                    </Heading>
                    <Button
                      shape="round"
                      className="min-w-[83px] !rounded-[11px] font-montserrat !text-deep_orange-700"
                    >
                      Guest Task
                    </Button>
                  </div>
                  <div className="flex items-center justify-between gap-5">
                    <div className="flex items-center gap-[7px]">
                      <Img
                        src="images/img_guc153_gray_600.svg"
                        alt="image"
                        className="h-[16px] w-[16px] self-start"
                      />
                      <Text as="p" className="self-end">
                        21 Jul 2024 | 03:00 am
                      </Text>
                    </div>
                    <div className="flex self-start pt-px">
                      <Text as="p"># 68988</Text>
                    </div>
                  </div>
                  <div className="flex justify-between gap-5">
                    <div className="flex">
                      <Heading as="h4" className="!text-gray-600">
                        From:Pantry
                      </Heading>
                    </div>
                    <div className="flex">
                      <Heading as="h5" className="!text-gray-600">
                        To:Reception
                      </Heading>
                    </div>
                  </div>
                  <Button
                    color="indigo_400"
                    size="lg"
                    leftIcon={
                      <Img
                        src="images/img_checkcircleoutline.svg"
                        alt="check_circle_outline"
                        className="h-[20px] w-[20px]"
                      />
                    }
                    className="w-full gap-2 rounded-[18px] sm:px-5"
                  >
                    Notify Staff
                  </Button>
                </div>
                <div className="flex w-full flex-col gap-3 rounded-[12px] border border-solid border-gray-400 bg-white-A700 p-2">
                  <div className="flex">
                    <div className="flex w-[35%] justify-between gap-5 md:w-full">
                      <div className="flex flex-1 items-center justify-center gap-[5px] rounded bg-gray-100">
                        <div className="flex flex-col items-center rounded-sm bg-white-A700 p-px">
                          <Img
                            src="images/img_user.svg"
                            alt="user_one"
                            className="h-[12px] w-[12px]"
                          />
                        </div>
                        <Heading as="h6" className="self-end">
                          Rajesh
                        </Heading>
                        <div className="h-[8px] w-[8px] rounded bg-deep_orange-900" />
                      </div>
                      <div className="flex rounded-[10px] bg-gray-100 p-0.5">
                        <Img
                          src="images/img_microphone.svg"
                          alt="microphone_one"
                          className="h-[14px] w-[14px]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start justify-between gap-5">
                    <Heading as="p">Routine Cleaning</Heading>
                    <Button
                      shape="round"
                      className="min-w-[95px] !rounded-[11px] font-montserrat"
                    >
                      Internal Task
                    </Button>
                  </div>
                  <div className="flex items-center justify-between gap-5">
                    <div className="flex items-center gap-[7px] pr-[18px]">
                      <Img
                        src="images/img_guc153_gray_600.svg"
                        alt="guc153_one"
                        className="h-[16px] w-[16px]"
                      />
                      <Text size="xs" as="p" className="self-end">
                        21 Jul 2024 | 03:00 am
                      </Text>
                    </div>
                    <Text size="xs" as="p" className="self-end">
                      # 68988
                    </Text>
                  </div>
                  <div className="flex justify-between gap-5">
                    <div className="flex">
                      <Heading as="p" className="!text-gray-600">
                        From:Pantry
                      </Heading>
                    </div>
                    <div className="flex">
                      <Heading as="p" className="!text-gray-600">
                        To:Reception
                      </Heading>
                    </div>
                  </div>
                  <Button
                    color="indigo_400"
                    size="md"
                    variant="outline"
                    className="w-full rounded-[15px] sm:px-5"
                  >
                    View Details
                  </Button>
                </div>
                <div className="flex w-full flex-col gap-3 rounded-[12px] border border-solid border-gray-400 bg-white-A700 p-2">
                  <div className="flex items-center justify-between gap-5">
                    <div className="flex w-[65%] items-center justify-center gap-1">
                      <div className="flex flex-1 items-center justify-center gap-[5px] rounded bg-gray-100">
                        <div className="flex flex-col items-center rounded-sm bg-white-A700 p-px">
                          <Img
                            src="images/img_user.svg"
                            alt="user_one"
                            className="h-[12px] w-[12px]"
                          />
                        </div>
                        <Heading as="p" className="self-end">
                          Rajesh
                        </Heading>
                        <div className="h-[8px] w-[8px] rounded bg-deep_orange-900" />
                      </div>
                      <Text
                        as="p"
                        className="flex h-[23px] items-center justify-center rounded-[11px] bg-deep_orange-900 p-1 !text-white-A700"
                      >
                        Delayed
                      </Text>
                      <Text
                        as="p"
                        className="flex h-[23px] items-center justify-center rounded-[11px] bg-deep_orange-900 p-1 !text-white-A700"
                      >
                        Complaint
                      </Text>
                    </div>
                    <div className="flex w-[12%] items-center justify-center gap-1 rounded-[10px] bg-deep_orange-900 p-0.5">
                      <Heading as="p" className="!text-white-A700">
                        1
                      </Heading>
                      <Img
                        src="images/img_star_9.svg"
                        alt="image"
                        className="h-[12px] w-[12px] rounded-[1px]"
                      />
                    </div>
                  </div>
                  <div className="flex items-start justify-between gap-5">
                    <Heading as="p">Routine Cleaning</Heading>
                    <Button
                      shape="round"
                      className="min-w-[95px] !rounded-[11px] font-montserrat"
                    >
                      Internal Task
                    </Button>
                  </div>
                  <div className="flex items-center justify-between gap-5">
                    <div className="flex items-center gap-[7px] pr-[18px]">
                      <Img
                        src="images/img_guc153_gray_600.svg"
                        alt="guc153_one"
                        className="h-[16px] w-[16px]"
                      />
                      <Text size="xs" as="p" className="self-end">
                        21 Jul 2024 | 03:00 am
                      </Text>
                    </div>
                    <Text size="xs" as="p" className="self-end">
                      # 68988
                    </Text>
                  </div>
                  <div className="flex justify-between gap-5">
                    <div className="flex">
                      <Heading as="p" className="!text-gray-600">
                        From:Pantry
                      </Heading>
                    </div>
                    <div className="flex">
                      <Heading as="p" className="!text-gray-600">
                        To:Reception
                      </Heading>
                    </div>
                  </div>
                  <Button
                    color="indigo_400"
                    size="md"
                    variant="outline"
                    className="w-full rounded-[15px] sm:px-5"
                  >
                    View Details
                  </Button>
                </div>
                <LUS70OneScheduled className="flex w-full flex-col gap-3 rounded-[12px] border border-solid border-gray-400 bg-white-A700 p-2" />
                <LUS70OneTaskhistory className="flex w-full flex-col gap-3 rounded-[12px] border border-solid border-gray-400 bg-white-A700 p-2" />
                <div className="flex w-full flex-col gap-[11px] rounded-[12px] border border-solid border-gray-400 bg-white-A700 p-2">
                  <div className="flex items-center justify-between gap-5">
                    <div className="flex flex-1 items-center gap-1">
                      <div className="flex w-[40%] items-center justify-center gap-[5px] rounded bg-gray-100">
                        <div className="flex flex-col items-center rounded-sm bg-white-A700 p-px">
                          <Img
                            src="images/img_user.svg"
                            alt="user_one"
                            className="h-[12px] w-[12px]"
                          />
                        </div>
                        <Heading as="p" className="self-end">
                          Rajesh
                        </Heading>
                        <div className="h-[8px] w-[8px] rounded bg-deep_orange-900" />
                      </div>
                      <Text
                        as="p"
                        className="flex h-[23px] items-center justify-center rounded-[11px] bg-gray-100 px-2 py-1 !text-deep_orange-900"
                      >
                        Not Accepted
                      </Text>
                      <div className="flex rounded-[10px] bg-gray-100 p-0.5">
                        <Img
                          src="images/img_microphone.svg"
                          alt="microphone_one"
                          className="h-[14px] w-[14px]"
                        />
                      </div>
                    </div>
                    <div className="flex">
                      <Button
                        color="red_100"
                        shape="round"
                        leftIcon={
                          <Img
                            src="images/img_accesstime_deep_orange_900.svg"
                            alt="access_time"
                            className="h-[16px] w-[16px]"
                          />
                        }
                        className="min-w-[62px] gap-1 font-montserrat"
                      >
                        1min
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-5">
                    <Heading size="s" as="h6">
                      Routine Cleaning
                    </Heading>
                    <Button
                      shape="round"
                      className="min-w-[95px] !rounded-[11px] font-montserrat"
                    >
                      Internal Task
                    </Button>
                  </div>
                  <div className="flex items-center justify-between gap-5">
                    <div className="flex items-center gap-[7px]">
                      <Img
                        src="images/img_guc153_gray_600.svg"
                        alt="guc153_one"
                        className="h-[16px] w-[16px] self-start"
                      />
                      <Text as="p" className="self-end">
                        21 Jul 2024 | 03:00 am
                      </Text>
                    </div>
                    <div className="flex self-start pt-px">
                      <Text as="p"># 68988</Text>
                    </div>
                  </div>
                  <div className="flex justify-between gap-5">
                    <div className="flex">
                      <Heading as="p" className="!text-gray-600">
                        From:Pantry
                      </Heading>
                    </div>
                    <div className="flex">
                      <Heading as="p" className="!text-gray-600">
                        To:Reception
                      </Heading>
                    </div>
                  </div>
                  <Button
                    color="deep_orange_900"
                    size="lg"
                    leftIcon={
                      <Img
                        src="images/img_checkcircleoutline.svg"
                        alt="check_circle_outline"
                        className="h-[20px] w-[20px]"
                      />
                    }
                    className="w-full gap-2 rounded-[18px] sm:px-5"
                  >
                    Notify Staff
                  </Button>
                </div>
                <div className="flex w-full flex-col gap-3 rounded-[12px] border border-solid border-gray-400 bg-white-A700 p-2">
                  <div className="flex">
                    <div className="flex w-[35%] justify-between gap-5 md:w-full">
                      <div className="flex flex-1 items-center justify-center gap-[5px] rounded bg-gray-100">
                        <div className="flex flex-col items-center rounded-sm bg-white-A700 p-px">
                          <Img
                            src="images/img_user.svg"
                            alt="user_one"
                            className="h-[12px] w-[12px]"
                          />
                        </div>
                        <Heading as="p" className="self-end">
                          Rajesh
                        </Heading>
                        <div className="h-[8px] w-[8px] rounded bg-deep_orange-900" />
                      </div>
                      <div className="flex rounded-[10px] bg-gray-100 p-0.5">
                        <Img
                          src="images/img_microphone.svg"
                          alt="microphone_one"
                          className="h-[14px] w-[14px]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start justify-between gap-5">
                    <Heading as="p">Routine Cleaning</Heading>
                    <Button
                      shape="round"
                      className="min-w-[95px] !rounded-[11px] font-montserrat"
                    >
                      Internal Task
                    </Button>
                  </div>
                  <div className="flex items-center justify-between gap-5">
                    <div className="flex items-center gap-[7px] pr-[18px]">
                      <Img
                        src="images/img_guc153_gray_600.svg"
                        alt="guc153_one"
                        className="h-[16px] w-[16px]"
                      />
                      <Text size="xs" as="p" className="self-end">
                        21 Jul 2024 | 03:00 am
                      </Text>
                    </div>
                    <Text size="xs" as="p" className="self-end">
                      # 68988
                    </Text>
                  </div>
                  <div className="flex justify-between gap-5">
                    <div className="flex">
                      <Heading as="p" className="!text-gray-600">
                        From:Pantry
                      </Heading>
                    </div>
                    <div className="flex">
                      <Heading as="p" className="!text-gray-600">
                        To:Reception
                      </Heading>
                    </div>
                  </div>
                  <Button
                    color="indigo_400"
                    size="md"
                    variant="outline"
                    className="w-full rounded-[15px] sm:px-5"
                  >
                    View Details
                  </Button>
                </div>
                <LUS70OneTaskhistory className="flex w-full flex-col gap-3 rounded-[12px] border border-solid border-gray-400 bg-white-A700 p-2" />
                <div className="flex w-full flex-col gap-[11px] rounded-[12px] border border-solid border-gray-400 bg-white-A700 p-2">
                  <div className="flex items-center justify-between gap-5">
                    <div className="flex flex-1 items-center gap-1">
                      <div className="flex flex-1 items-center justify-center gap-[5px] rounded bg-gray-100">
                        <div className="flex flex-col items-center rounded-sm bg-white-A700 p-px">
                          <Img
                            src="images/img_user.svg"
                            alt="user_one"
                            className="h-[12px] w-[12px]"
                          />
                        </div>
                        <Heading as="p" className="self-end">
                          Rajesh
                        </Heading>
                        <div className="h-[8px] w-[8px] rounded bg-deep_orange-900" />
                      </div>
                      <Text
                        as="p"
                        className="flex h-[23px] items-center justify-center rounded-[11px] bg-gray-100 px-2 py-1 !text-amber-A700"
                      >
                        Ongoing
                      </Text>
                      <div className="flex rounded-[10px] bg-gray-100 p-1">
                        <Img
                          src="images/img_thumbs_up.svg"
                          alt="thumbsup_one"
                          className="h-[12px] w-[12px]"
                        />
                      </div>
                    </div>
                    <div className="flex">
                      <Button
                        color="teal_50"
                        shape="round"
                        leftIcon={
                          <Img
                            src="images/img_accesstime.svg"
                            alt="access_time"
                            className="h-[16px] w-[16px]"
                          />
                        }
                        className="min-w-[74px] gap-1 font-montserrat"
                      >
                        20min
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-5">
                    <Heading size="s" as="h6">
                      Routine Cleaning
                    </Heading>
                    <Button
                      shape="round"
                      className="min-w-[95px] !rounded-[11px] font-montserrat"
                    >
                      Internal Task
                    </Button>
                  </div>
                  <div className="flex items-center justify-between gap-5">
                    <div className="flex items-center gap-[7px]">
                      <Img
                        src="images/img_guc153_gray_600.svg"
                        alt="guc153_one"
                        className="h-[16px] w-[16px] self-start"
                      />
                      <Text as="p" className="self-end">
                        21 Jul 2024 | 03:00 am
                      </Text>
                    </div>
                    <div className="flex self-start pt-px">
                      <Text as="p"># 68988</Text>
                    </div>
                  </div>
                  <div className="flex justify-between gap-5">
                    <div className="flex">
                      <Heading as="p" className="!text-gray-600">
                        From:Pantry
                      </Heading>
                    </div>
                    <div className="flex">
                      <Heading as="p" className="!text-gray-600">
                        To:Reception
                      </Heading>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col gap-[11px] rounded-[12px] border border-solid border-gray-400 bg-white-A700 p-2">
                  <div className="flex items-center">
                    <div className="flex w-[24%] items-center justify-center gap-[5px] rounded bg-gray-100">
                      <div className="flex flex-col items-center rounded-sm bg-white-A700 p-px">
                        <Img
                          src="images/img_user.svg"
                          alt="user_one"
                          className="h-[12px] w-[12px]"
                        />
                      </div>
                      <Heading as="p" className="self-end">
                        Rajesh
                      </Heading>
                      <div className="h-[8px] w-[8px] rounded bg-deep_orange-900" />
                    </div>
                    <div className="flex rounded-[10px] bg-gray-100 p-1">
                      <Img
                        src="images/img_thumbs_up.svg"
                        alt="thumbsup_one"
                        className="h-[12px] w-[12px]"
                      />
                    </div>
                    <div className="flex">
                      <Button
                        color="teal_50"
                        shape="round"
                        leftIcon={
                          <Img
                            src="images/img_accesstime.svg"
                            alt="access_time"
                            className="h-[16px] w-[16px]"
                          />
                        }
                        className="min-w-[74px] gap-1 font-montserrat"
                      >
                        20min
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-5">
                    <Heading size="s" as="h6">
                      Routine Cleaning
                    </Heading>
                    <Button
                      shape="round"
                      className="min-w-[95px] !rounded-[11px] font-montserrat"
                    >
                      Internal Task
                    </Button>
                  </div>
                  <div className="flex items-center justify-between gap-5">
                    <div className="flex items-center gap-[7px]">
                      <Img
                        src="images/img_guc153_gray_600.svg"
                        alt="guc153_one"
                        className="h-[16px] w-[16px] self-start"
                      />
                      <Text as="p" className="self-end">
                        21 Jul 2024 | 03:00 am
                      </Text>
                    </div>
                    <div className="flex self-start pt-px">
                      <Text as="p"># 68988</Text>
                    </div>
                  </div>
                  <div className="flex justify-between gap-5">
                    <div className="flex">
                      <Heading as="p" className="!text-gray-600">
                        From:Pantry
                      </Heading>
                    </div>
                    <div className="flex">
                      <Heading as="p" className="!text-gray-600">
                        To:Reception
                      </Heading>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2.5 bg-gray-100 p-[11px]">
                    <div className="flex flex-wrap items-center gap-2 self-start">
                      <Heading
                        as="p"
                        className="self-end !font-montserrat !font-bold"
                      >
                        Shampoo
                      </Heading>
                      <Text
                        as="p"
                        className="self-start !font-normal !text-gray-700"
                      >
                        x1
                      </Text>
                    </div>
                    <div className="flex flex-col items-start gap-3 self-stretch">
                      <div className="flex flex-wrap gap-2">
                        <Heading as="p" className="!font-montserrat !font-bold">
                          Conditioner
                        </Heading>
                        <Text
                          as="p"
                          className="h-[15px] !font-normal !text-gray-700"
                        >
                          x2
                        </Text>
                      </div>
                      <Text as="p" className="!font-normal !text-gray-400">
                        <span className="font-medium text-indigo-400">
                          Instructions:
                        </span>
                        <span className="font-medium text-gray-400">
                          &nbsp;&nbsp;
                        </span>
                        <span className="font-medium text-indigo-400">
                          Please get conditioners.
                        </span>
                      </Text>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 self-start">
                      <Heading as="p" className="!font-montserrat !font-bold">
                        Towel
                      </Heading>
                      <Text
                        as="p"
                        className="h-[14px] !font-normal !text-gray-700"
                      >
                        x2
                      </Text>
                    </div>
                  </div>
                  <Button
                    color="indigo_400"
                    size="lg"
                    leftIcon={
                      <Img
                        src="images/img_checkcircleoutline.svg"
                        alt="check_circle_outline"
                        className="h-[20px] w-[20px]"
                      />
                    }
                    className="w-full gap-2 rounded-[18px] sm:px-5"
                  >
                    Notify Staff
                  </Button>
                </div>
                <div className="flex w-full flex-col gap-3 rounded-[12px] border border-solid border-gray-400 bg-white-A700 p-2">
                  <div className="flex">
                    <div className="flex w-[35%] justify-between gap-5 md:w-full">
                      <div className="flex flex-1 items-center justify-center gap-[5px] rounded bg-gray-100">
                        <div className="flex flex-col items-center rounded-sm bg-white-A700 p-px">
                          <Img
                            src="images/img_user.svg"
                            alt="user_one"
                            className="h-[12px] w-[12px]"
                          />
                        </div>
                        <Heading as="p" className="self-end">
                          Rajesh
                        </Heading>
                        <div className="h-[8px] w-[8px] rounded bg-deep_orange-900" />
                      </div>
                      <div className="flex rounded-[10px] bg-gray-100 p-0.5">
                        <Img
                          src="images/img_microphone.svg"
                          alt="microphone_one"
                          className="h-[14px] w-[14px]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start justify-between gap-5">
                    <Heading as="p">Routine Cleaning</Heading>
                    <Button
                      shape="round"
                      className="min-w-[95px] !rounded-[11px] font-montserrat"
                    >
                      Internal Task
                    </Button>
                  </div>
                  <div className="flex items-center justify-between gap-5">
                    <div className="flex items-center gap-[7px] pr-[18px]">
                      <Img
                        src="images/img_guc153_gray_600.svg"
                        alt="guc153_one"
                        className="h-[16px] w-[16px]"
                      />
                      <Text size="xs" as="p" className="self-end">
                        21 Jul 2024 | 03:00 am
                      </Text>
                    </div>
                    <Text size="xs" as="p" className="self-end">
                      # 68988
                    </Text>
                  </div>
                  <div className="flex justify-between gap-5">
                    <div className="flex">
                      <Heading as="p" className="!text-gray-600">
                        From:Pantry
                      </Heading>
                    </div>
                    <div className="flex">
                      <Heading as="p" className="!text-gray-600">
                        To:Reception
                      </Heading>
                    </div>
                  </div>
                  <Button
                    color="indigo_400"
                    size="md"
                    variant="outline"
                    className="w-full rounded-[15px] sm:px-5"
                  >
                    View Details
                  </Button>
                </div>
                <LUS70OneTaskhistory1 className="flex w-full flex-col items-start gap-3 rounded-[12px] border border-solid border-gray-400 bg-white-A700 p-2" />
                <LUS70OneScheduled className="flex w-full flex-col gap-3 rounded-[12px] border border-solid border-gray-400 bg-white-A700 p-2" />
                <div className="flex w-full flex-col gap-3 rounded-[12px] border border-solid border-gray-400 bg-white-A700 p-2">
                  <div className="flex items-center justify-between gap-5">
                    <div className="flex w-[65%] items-center justify-center gap-1">
                      <div className="flex flex-1 items-center justify-center gap-[5px] rounded bg-gray-100">
                        <div className="flex flex-col items-center rounded-sm bg-white-A700 p-px">
                          <Img
                            src="images/img_user.svg"
                            alt="user_one"
                            className="h-[12px] w-[12px]"
                          />
                        </div>
                        <Heading as="p" className="self-end">
                          Rajesh
                        </Heading>
                        <div className="h-[8px] w-[8px] rounded bg-deep_orange-900" />
                      </div>
                      <Text
                        as="p"
                        className="flex h-[23px] items-center justify-center rounded-[11px] bg-deep_orange-900 p-1 !text-white-A700"
                      >
                        Delayed
                      </Text>
                      <Text
                        as="p"
                        className="flex h-[23px] items-center justify-center rounded-[11px] bg-deep_orange-900 p-1 !text-white-A700"
                      >
                        Complaint
                      </Text>
                    </div>
                    <div className="flex w-[12%] items-center justify-center gap-1 rounded-[10px] bg-deep_orange-900 p-0.5">
                      <Heading as="p" className="!text-white-A700">
                        1
                      </Heading>
                      <Img
                        src="images/img_star_9_2.svg"
                        alt="image"
                        className="h-[12px] w-[12px] rounded-[1px]"
                      />
                    </div>
                  </div>
                  <div className="flex items-start justify-between gap-5">
                    <Heading as="p">Routine Cleaning</Heading>
                    <Button
                      shape="round"
                      className="min-w-[95px] !rounded-[11px] font-montserrat"
                    >
                      Internal Task
                    </Button>
                  </div>
                  <div className="flex items-center justify-between gap-5">
                    <div className="flex items-center gap-[7px] pr-[18px]">
                      <Img
                        src="images/img_guc153_gray_600.svg"
                        alt="guc153_one"
                        className="h-[16px] w-[16px]"
                      />
                      <Text size="xs" as="p" className="self-end">
                        21 Jul 2024 | 03:00 am
                      </Text>
                    </div>
                    <Text size="xs" as="p" className="self-end">
                      # 68988
                    </Text>
                  </div>
                  <div className="flex justify-between gap-5">
                    <div className="flex">
                      <Heading as="p" className="!text-gray-600">
                        From:Pantry
                      </Heading>
                    </div>
                    <div className="flex">
                      <Heading as="p" className="!text-gray-600">
                        To:Reception
                      </Heading>
                    </div>
                  </div>
                  <Button
                    color="indigo_400"
                    size="md"
                    variant="outline"
                    className="w-full rounded-[15px] sm:px-5"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
