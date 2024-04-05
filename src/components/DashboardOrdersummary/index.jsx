import React from "react";
import { Text, Img } from "./..";

export default function DashboardOrdersummary({
  recentorders = "Recent Orders",
  iphonecounter = "iPhone 13",
  p12sept2022 = "12 Sept 2022",
  price = "₦730,000.00 x 1",
  pending = "Pending",
  iphonecounter1 = "iPhone 13",
  p12sept20221 = "12 Sept 2022",
  price1 = "₦730,000.00 x 1",
  completed = "Completed",
  iphonecounter2 = "iPhone 13",
  p12sept20222 = "12 Sept 2022",
  price2 = "₦730,000.00 x 1",
  pending1 = "Pending",
  iphonecounter3 = "iPhone 13",
  p12sept20223 = "12 Sept 2022",
  price3 = "₦730,000.00 x 1",
  completed1 = "Completed",
  iphonecounter4 = "iPhone 13",
  p12sept20224 = "12 Sept 2022",
  price4 = "₦730,000.00 x 1",
  completed2 = "Completed",
  iphonecounter5 = "iPhone 13",
  p12sept20225 = "12 Sept 2022",
  price5 = "₦730,000.00 x 1",
  completed3 = "Completed",
  iphonecounter6 = "iPhone 13",
  p12sept20226 = "12 Sept 2022",
  price6 = "₦730,000.00 x 1",
  pending2 = "Pending",
  iphonecounter7 = "iPhone 13",
  p12sept20227 = "12 Sept 2022",
  price7 = "₦730,000.00 x 1",
  pending3 = "Pending",
  iphonecounter8 = "iPhone 13",
  p12sept20228 = "12 Sept 2022",
  price8 = "₦730,000.00 x 1",
  pending4 = "Pending",
  ...props
}) {
  return (
    <div {...props}>
      <Text size="lg" as="p" className="!text-gray-800">
        {recentorders}
      </Text>
      <div className="flex flex-col gap-3 self-stretch">
        <div className="flex flex-1 items-center gap-3.5 border-b border-solid border-gray-100_01 pb-3 sm:flex-col">
          <Img
            src="images/img_rectangle_3.png"
            alt="iphone_thirteen"
            className="h-[49px] w-[49px] rounded-lg object-cover sm:w-full"
          />
          <div className="flex flex-1 flex-col gap-[9px] self-start sm:self-stretch">
            <div className="flex items-center justify-between gap-5">
              <Text as="p" className="!text-gray-800">
                {iphonecounter}
              </Text>
              <div className="flex self-start">
                <Text size="s" as="p" className="!text-blue_gray-300">
                  {p12sept2022}
                </Text>
              </div>
            </div>
            <div className="flex items-center justify-between gap-5">
              <div className="flex self-end">
                <Text as="p" className="!font-medium !text-blue_gray-900">
                  {price}
                </Text>
              </div>
              <Text
                size="s"
                as="p"
                className="flex h-[19px] items-center justify-center rounded-lg bg-red-A100_1e px-[15px] py-0.5 !text-red-300"
              >
                {pending}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center gap-3.5 border-b border-solid border-gray-100_01 pb-3 sm:flex-col">
          <Img
            src="images/img_rectangle_3_49x49.png"
            alt="image"
            className="h-[49px] w-[49px] rounded-lg object-cover sm:w-full"
          />
          <div className="flex flex-1 flex-col gap-[9px] self-start sm:self-stretch">
            <div className="flex items-center justify-between gap-5">
              <Text as="p" className="!text-gray-800">
                {iphonecounter1}
              </Text>
              <div className="flex self-start">
                <Text size="s" as="p" className="!text-blue_gray-300">
                  {p12sept20221}
                </Text>
              </div>
            </div>
            <div className="flex items-center justify-between gap-5">
              <div className="flex self-end">
                <Text as="p" className="!font-medium !text-blue_gray-900">
                  {price1}
                </Text>
              </div>
              <Text
                size="s"
                as="p"
                className="flex h-[19px] items-center justify-center rounded-lg bg-green-600_1e px-[15px] py-0.5 !text-green-500"
              >
                {completed}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center gap-3.5 border-b border-solid border-gray-100_01 pb-3 sm:flex-col">
          <Img
            src="images/img_rectangle_3.png"
            alt="image"
            className="h-[49px] w-[49px] rounded-lg object-cover sm:w-full"
          />
          <div className="flex flex-1 flex-col gap-[9px] self-start sm:self-stretch">
            <div className="flex items-center justify-between gap-5">
              <Text as="p" className="!text-gray-800">
                {iphonecounter2}
              </Text>
              <div className="flex self-start">
                <Text size="s" as="p" className="!text-blue_gray-300">
                  {p12sept20222}
                </Text>
              </div>
            </div>
            <div className="flex items-center justify-between gap-5">
              <div className="flex self-end">
                <Text as="p" className="!font-medium !text-blue_gray-900">
                  {price2}
                </Text>
              </div>
              <Text
                size="s"
                as="p"
                className="flex h-[19px] items-center justify-center rounded-lg bg-red-A100_1e px-[15px] py-0.5 !text-red-300"
              >
                {pending1}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center gap-3.5 border-b border-solid border-gray-100_01 pb-3 sm:flex-col">
          <Img
            src="images/img_rectangle_3_49x49.png"
            alt="image"
            className="h-[49px] w-[49px] rounded-lg object-cover sm:w-full"
          />
          <div className="flex flex-1 flex-col gap-[9px] self-start sm:self-stretch">
            <div className="flex items-center justify-between gap-5">
              <Text as="p" className="!text-gray-800">
                {iphonecounter3}
              </Text>
              <div className="flex self-start">
                <Text size="s" as="p" className="!text-blue_gray-300">
                  {p12sept20223}
                </Text>
              </div>
            </div>
            <div className="flex items-center justify-between gap-5">
              <div className="flex self-end">
                <Text as="p" className="!font-medium !text-blue_gray-900">
                  {price3}
                </Text>
              </div>
              <Text
                size="s"
                as="p"
                className="flex h-[19px] items-center justify-center rounded-lg bg-green-600_1e px-[15px] py-0.5 !text-green-500"
              >
                {completed1}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center gap-3.5 border-b border-solid border-gray-100_01 pb-3 sm:flex-col">
          <Img
            src="images/img_rectangle_3_49x49.png"
            alt="image"
            className="h-[49px] w-[49px] rounded-lg object-cover sm:w-full"
          />
          <div className="flex flex-1 flex-col gap-[9px] self-start sm:self-stretch">
            <div className="flex items-center justify-between gap-5">
              <Text as="p" className="!text-gray-800">
                {iphonecounter4}
              </Text>
              <div className="flex self-start">
                <Text size="s" as="p" className="!text-blue_gray-300">
                  {p12sept20224}
                </Text>
              </div>
            </div>
            <div className="flex items-center justify-between gap-5">
              <div className="flex self-end">
                <Text as="p" className="!font-medium !text-blue_gray-900">
                  {price4}
                </Text>
              </div>
              <Text
                size="s"
                as="p"
                className="flex h-[19px] items-center justify-center rounded-lg bg-green-600_1e px-[15px] py-0.5 !text-green-500"
              >
                {completed2}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center gap-3.5 border-b border-solid border-gray-100_01 pb-3 sm:flex-col">
          <Img
            src="images/img_rectangle_3_49x49.png"
            alt="image"
            className="h-[49px] w-[49px] rounded-lg object-cover sm:w-full"
          />
          <div className="flex flex-1 flex-col gap-[9px] self-start sm:self-stretch">
            <div className="flex items-center justify-between gap-5">
              <Text as="p" className="!text-gray-800">
                {iphonecounter5}
              </Text>
              <div className="flex self-start">
                <Text size="s" as="p" className="!text-blue_gray-300">
                  {p12sept20225}
                </Text>
              </div>
            </div>
            <div className="flex items-center justify-between gap-5">
              <div className="flex self-end">
                <Text as="p" className="!font-medium !text-blue_gray-900">
                  {price5}
                </Text>
              </div>
              <Text
                size="s"
                as="p"
                className="flex h-[19px] items-center justify-center rounded-lg bg-green-600_1e px-[15px] py-0.5 !text-green-500"
              >
                {completed3}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center gap-3.5 border-b border-solid border-gray-100_01 pb-3 sm:flex-col">
          <Img
            src="images/img_rectangle_3.png"
            alt="image"
            className="h-[49px] w-[49px] rounded-lg object-cover sm:w-full"
          />
          <div className="flex flex-1 flex-col gap-[9px] self-start sm:self-stretch">
            <div className="flex items-center justify-between gap-5">
              <Text as="p" className="!text-gray-800">
                {iphonecounter6}
              </Text>
              <div className="flex self-start">
                <Text size="s" as="p" className="!text-blue_gray-300">
                  {p12sept20226}
                </Text>
              </div>
            </div>
            <div className="flex items-center justify-between gap-5">
              <div className="flex self-end">
                <Text as="p" className="!font-medium !text-blue_gray-900">
                  {price6}
                </Text>
              </div>
              <Text
                size="s"
                as="p"
                className="flex h-[19px] items-center justify-center rounded-lg bg-red-A100_1e px-[15px] py-0.5 !text-red-300"
              >
                {pending2}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center gap-3.5 border-b border-solid border-gray-100_01 pb-3 sm:flex-col">
          <Img
            src="images/img_rectangle_3.png"
            alt="image"
            className="h-[49px] w-[49px] rounded-lg object-cover sm:w-full"
          />
          <div className="flex flex-1 flex-col gap-[9px] self-start sm:self-stretch">
            <div className="flex items-center justify-between gap-5">
              <Text as="p" className="!text-gray-800">
                {iphonecounter7}
              </Text>
              <div className="flex self-start">
                <Text size="s" as="p" className="!text-blue_gray-300">
                  {p12sept20227}
                </Text>
              </div>
            </div>
            <div className="flex items-center justify-between gap-5">
              <div className="flex self-end">
                <Text as="p" className="!font-medium !text-blue_gray-900">
                  {price7}
                </Text>
              </div>
              <Text
                size="s"
                as="p"
                className="flex h-[19px] items-center justify-center rounded-lg bg-red-A100_1e px-[15px] py-0.5 !text-red-300"
              >
                {pending3}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center gap-3.5 border-b border-solid border-gray-100_01 pb-3 sm:flex-col">
          <Img
            src="images/img_rectangle_3.png"
            alt="image"
            className="h-[49px] w-[49px] rounded-lg object-cover sm:w-full"
          />
          <div className="flex flex-1 flex-col gap-[9px] self-start sm:self-stretch">
            <div className="flex items-center justify-between gap-5">
              <Text as="p" className="!text-gray-800">
                {iphonecounter8}
              </Text>
              <div className="flex self-start">
                <Text size="s" as="p" className="!text-blue_gray-300">
                  {p12sept20228}
                </Text>
              </div>
            </div>
            <div className="flex items-center justify-between gap-5">
              <div className="flex self-end">
                <Text as="p" className="!font-medium !text-blue_gray-900">
                  {price8}
                </Text>
              </div>
              <Text
                size="s"
                as="p"
                className="flex h-[19px] items-center justify-center rounded-lg bg-red-A100_1e px-[15px] py-0.5 !text-red-300"
              >
                {pending4}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
