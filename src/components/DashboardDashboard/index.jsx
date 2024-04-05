import React from "react";
import { Text, Img, Button } from "./..";

export default function DashboardDashboard({ ...props }) {
  return (
    <div {...props}>
      <div className="flex items-center justify-between gap-5 self-stretch">
        <Button shape="round" className="w-[36px]">
          <Img src="images/img_fi_shopping_cart.svg" />
        </Button>
        <div className="flex items-center gap-[7px]">
          <Text size="s" as="p" className="!text-gray-400">
            This Week
          </Text>
          <Img src="images/img_arrowdown_gray_400.svg" alt="arrowdown_one" className="h-[16px] w-[16px]" />
        </div>
      </div>
      <div className="flex justify-between gap-5 self-stretch">
        <div className="flex flex-col items-start gap-[7px]">
          <Text as="p" className="!text-red-300">
            Abandoned Cart
          </Text>
          <div className="flex flex-wrap items-center gap-[7px]">
            <Text size="xl" as="p" className="!font-poppins !text-gray-800">
              20%
            </Text>
            <Text size="s" as="p" className="!text-green-500">
              +0.00%
            </Text>
          </div>
        </div>
        <div className="flex w-[45%] flex-col items-start gap-[7px]">
          <Text as="p">Customers</Text>
          <div className="flex">
            <Text size="xl" as="p" className="!font-poppins !text-gray-800">
              30
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
