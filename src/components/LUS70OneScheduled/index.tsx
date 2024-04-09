import React from "react";
import { Button, Heading, Text, Img } from "./..";

interface Props {
  className?: string;
  rajesh?: string;
  routine?: string;
  guestTask?: string;
  price?: string;
  sixtyeightthous?: string;
  frompantry?: string;
  toreception?: string;
  viewDetails?: string;
}

export default function LUS70OneScheduled({
  rajesh = "Rajesh",
  routine = "Routine Cleaning",
  guestTask = "Guest Task",
  price = " 21 Jul 2024 | 03:00 am",
  sixtyeightthous = "# 68988",
  frompantry = "From:Pantry",
  toreception = "To:Reception",
  viewDetails = "View Details",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex self-stretch">
        <div className="flex w-[35%] gap-1 md:w-full">
          <div className="flex flex-1 items-center justify-center gap-[5px] rounded bg-gray-100">
            <div className="flex flex-col items-center rounded-sm bg-white-A700 p-px">
              <Img src="images/img_user.svg" alt="user_one" className="h-[12px] w-[12px]" />
            </div>
            <Heading as="h1" className="self-end">
              {rajesh}
            </Heading>
            <div className="h-[8px] w-[8px] rounded bg-deep_orange-900" />
          </div>
          <div className="flex rounded-[10px] bg-gray-100 p-1">
            <Img src="images/img_thumbs_up.svg" alt="thumbsup_one" className="h-[12px] w-[12px]" />
          </div>
        </div>
      </div>
      <div className="flex items-start justify-between gap-5 self-stretch">
        <Heading as="h2">{routine}</Heading>
        <Button shape="round" className="min-w-[83px] !rounded-[11px] font-montserrat !text-deep_orange-700">
          {guestTask}
        </Button>
      </div>
      <div className="flex flex-col gap-3 self-stretch">
        <div className="flex items-center justify-between gap-5">
          <div className="flex items-center gap-[7px] pr-[18px]">
            <Img src="images/img_guc153_gray_600.svg" alt="guc153_one" className="h-[16px] w-[16px]" />
            <Text size="xs" as="p" className="self-end">
              {price}
            </Text>
          </div>
          <Text size="xs" as="p" className="self-end">
            {sixtyeightthous}
          </Text>
        </div>
        <div className="flex justify-between gap-5">
          <div className="flex">
            <Heading as="h2" className="!text-gray-600">
              {frompantry}
            </Heading>
          </div>
          <div className="flex">
            <Heading as="h3" className="!text-gray-600">
              {toreception}
            </Heading>
          </div>
        </div>
      </div>
      <Button color="indigo_400" size="md" variant="outline" className="w-full rounded-[15px] sm:px-5">
        {viewDetails}
      </Button>
    </div>
  );
}
