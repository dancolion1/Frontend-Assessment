import React from "react";
import { Text, SelectBox, Img, Button } from "./..";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function DashboardDashboard1({
  allorders = "All Orders",
  zero = "450",
  pending = "Pending",
  zeroOne = "5",
  completed = "Completed",
  zeroTwo = "445",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex items-center justify-between gap-5 self-stretch">
        <Button shape="round" className="w-[36px]">
          <Img src="images/img_bag_gray_900.svg" />
        </Button>
        <SelectBox
          shape="square"
          indicator={<Img src="images/img_arrowdown_gray_400.svg" alt="arrow_down" className="h-[16px] w-[16px]" />}
          name="thisweek"
          placeholder={`This Week`}
          options={dropDownOptions}
          className="w-[21%] gap-px text-gray-400 sm:pr-5"
        />
      </div>
      <div className="flex justify-between gap-5 self-stretch">
        <div className="flex w-[28%] flex-col items-start gap-[7px]">
          <Text as="p">{allorders}</Text>
          <div className="flex">
            <Text size="xl" as="p" className="!font-poppins !text-gray-800">
              {zero}
            </Text>
          </div>
        </div>
        <div className="flex w-[28%] flex-col items-start justify-center gap-[5px]">
          <Text as="p">{pending}</Text>
          <div className="flex">
            <Text size="xl" as="p" className="!font-poppins !text-gray-800">
              {zeroOne}
            </Text>
          </div>
        </div>
        <div className="flex w-[28%] flex-col items-start justify-center gap-[5px]">
          <Text as="p">{completed}</Text>
          <div className="flex">
            <Text size="xl" as="p" className="!font-poppins !text-gray-800">
              {zeroTwo}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
