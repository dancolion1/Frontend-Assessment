import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, SelectBox } from "../../components";
import DashboardDashboard from "../../components/DashboardDashboard";
import DashboardDashboard1 from "../../components/DashboardDashboard1";
import DashboardOrdersummary from "../../components/DashboardOrdersummary";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function DashboardPage() {
  const [collapsed, setCollapsed] = React.useState(false);

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}

  return (
    <>
      <Helmet>
        <title>frontend assessment</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full justify-center bg-gray-100 md:flex-col">
        <Sidebar
          width="298px !important"
          collapsedWidth="80px !important"
          collapsed={collapsed}
          className="!sticky top-0 flex h-screen flex-col overflow-auto bg-white-A700 p-3.5 md:hidden md:p-5"
        >
          <Img src="images/img_logo.svg" alt="logo_one" className="ml-5 h-[52px] w-[50%] md:ml-0" />
          <Menu
            menuItemStyles={{
              button: {
                padding: 0,
                gap: "16px",
                color: "#52545c",
                textAlign: "center",
                fontWeight: 400,
                fontSize: "14px",
                borderRadius: "12px",
                [`&:hover, &.ps-active`]: { color: "#ffffff", backgroundColor: "#5570f1 !important" },
              },
            }}
            rootStyles={{ ["&>ul"]: { gap: "504px" } }}
            className="mt-[62px] flex w-full flex-col self-center pb-[22px] sm:pb-5"
          >
            <div>
              <MenuItem icon={<Img src="images/img_grid.svg" alt="grid_one" className="h-[24px] w-[24px]" />}>
                Dashboard
              </MenuItem>
              <MenuItem
                icon={<Img src="images/img_bag.svg" alt="bag_one" className="h-[24px] w-[24px]" />}
                suffix={
                  <div className="h-[24px] w-[10%] self-end rounded-[12px] bg-orange-200">
                    <Text size="s" as="p" className="mx-auto mt-[60px] text-center !text-gray-900_01">
                      3
                    </Text>
                  </div>
                }
              >
                Orders
              </MenuItem>
              <MenuItem icon={<Img src="images/img_settings.svg" alt="settings_one" className="h-[24px] w-[24px]" />}>
                Customers
              </MenuItem>
              <MenuItem
                icon={
                  <Img src="images/img_iconly_light_folder.svg" alt="iconlylight_one" className="h-[24px] w-[24px]" />
                }
              >
                Inventory
              </MenuItem>
              <MenuItem
                icon={<Img src="images/img_user.svg" alt="user_one" className="h-[24px] w-[24px]" />}
                suffix={
                  <div className="h-[24px] w-[10%] self-end rounded-[12px] bg-orange-200">
                    <Text size="s" as="p" className="mx-auto mt-[132px] h-[15px] text-center !text-gray-900_01">
                      16
                    </Text>
                  </div>
                }
              >
                Conversations
              </MenuItem>
              <MenuItem icon={<Img src="images/img_search.svg" alt="search_one" className="h-[24px] w-[24px]" />}>
                Settings
              </MenuItem>
            </div>
            <MenuItem
              icon={<Img src="images/img_fi_headphones.svg" alt="fiheadphones" className="h-[24px] w-[24px]" />}
            >
              Contact Support
            </MenuItem>
          </Menu>
          {!collapsed ? (
            <div className="mt-3.5 flex w-[87%] flex-col items-start justify-center gap-4 self-center rounded-[16px] bg-orange-200_33 p-[11px] md:w-full">
              <div className="ml-[9px] flex items-center gap-3 pr-1.5 md:ml-0">
                <Img src="images/img_fi_gift.svg" alt="figift_one" className="h-[24px] w-[24px]" />
                <Text as="p" className="self-end !text-gray-900_01">
                  Free Gift Awaits You!
                </Text>
              </div>
              <div className="ml-[9px] flex items-center gap-[17px] md:ml-0">
                <Text size="s" as="p" className="self-end !text-gray-600">
                  Upgrade your account
                </Text>
                <Img src="images/img_arrow_right.svg" alt="arrowright_one" className="h-[16px] w-[16px]" />
              </div>
            </div>
          ) : null}
          {!collapsed ? (
            <div className="my-[34px] ml-[30px] flex items-center gap-2 md:ml-0">
              <Img src="images/img_thumbs_up.svg" alt="thumbsup_one" className="h-[24px] w-[24px]" />
              <Text as="p" className="self-end !text-red-300">
                Logout
              </Text>
            </div>
          ) : null}
        </Sidebar>
        <div className="flex flex-1 flex-col gap-7 pb-5 md:self-stretch md:p-5">
          <header>
            <div className="bg-white-A700 p-3.5">
              <div className="flex items-center justify-between gap-5 sm:flex-col">
                <Text size="xl" as="p" className="!font-poppins !text-gray-800">
                  Dashboard
                </Text>
                <div className="flex w-[22%] items-center justify-center gap-5 sm:w-full">
                  <SelectBox
                    size="sm"
                    shape="round"
                    indicator={<Img src="images/img_arrowdown.svg" alt="arrow_down" className="h-[20px] w-[20px]" />}
                    name="nannysshop"
                    placeholder={`Nanny’s Shop`}
                    options={dropDownOptions}
                    className="flex-grow gap-px sm:pr-5"
                  />
                  <Img src="images/img_play.svg" alt="play_one" className="h-[20px] w-[20px]" />
                  <Img
                    src="images/img_profile_1.png"
                    alt="profileone_one"
                    className="h-[32px] w-[32px] rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="flex border-t border-solid border-gray-100_01 bg-white-A700">
              <div className="ml-4 flex md:ml-0">
                <Img src="images/img_home.svg" alt="home_one" className="h-[16px] w-[16px]" />
              </div>
            </div>
          </header>
          <div className="flex w-[97%] flex-col gap-5 md:w-full">
            <div className="flex gap-[19px] md:flex-col">
              <DashboardDashboard className="flex flex-1 flex-col gap-8 rounded-[12px] bg-white-A700 p-[11px]" />
              <DashboardDashboard className="flex flex-1 flex-col gap-8 rounded-[12px] bg-white-A700 p-[11px]" />
              <DashboardDashboard1 className="flex w-[39%] flex-col gap-8 rounded-[12px] bg-white-A700 p-[11px] md:w-full" />
            </div>
            <div className="flex items-center gap-[18px] md:flex-col">
              <div className="flex flex-1 flex-col gap-5 md:self-stretch">
                <div className="flex gap-5 md:flex-col">
                  <div className="flex w-full flex-col items-center gap-[23px] rounded-[12px] bg-white-A700 p-5">
                    <div className="mt-[3px] flex flex-col gap-2.5 self-stretch">
                      <div className="flex items-center justify-between gap-5">
                        <Text size="lg" as="p" className="!text-gray-800">
                          Marketting
                        </Text>
                        <div className="flex items-center gap-[7px] self-start">
                          <Text size="s" as="p" className="!text-gray-400">
                            This Week
                          </Text>
                          <Img
                            src="images/img_arrowdown_gray_400.svg"
                            alt="arrowdown_one"
                            className="h-[16px] w-[16px]"
                          />
                        </div>
                      </div>
                      <div className="flex justify-between gap-5">
                        <div className="flex w-[26%] items-start justify-center gap-2">
                          <div className="h-[8px] w-[8px] rounded bg-indigo-A200" />
                          <Text size="xs" as="p" className="!text-blue_gray-300">
                            Acquisition
                          </Text>
                        </div>
                        <div className="flex w-[23%] items-start justify-center gap-2">
                          <div className="mt-0.5 h-[8px] w-[8px] rounded bg-indigo-200" />
                          <Text size="xs" as="p" className="!text-blue_gray-300">
                            Purchase
                          </Text>
                        </div>
                        <div className="flex w-[23%] items-start justify-center gap-2">
                          <div className="mt-0.5 h-[8px] w-[8px] rounded bg-orange-200" />
                          <Text size="xs" as="p" className="!text-blue_gray-300">
                            Retention
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="relative mb-[21px] h-[205px] w-[205px] rounded-[102px] bg-blue_gray-50 p-4 md:h-auto">
                      <CircularProgressbar
                        strokeWidth={12}
                        value={13}
                        styles={{ trail: { stroke: "#ffcc91" }, path: { strokeLinecap: "square" } }}
                        className="h-[172px] w-full"
                      />
                      <CircularProgressbar
                        strokeWidth={12}
                        value={45}
                        styles={{ trail: { stroke: "#5570f1" }, path: { strokeLinecap: "square" } }}
                        className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[172px] w-full"
                      />
                    </div>
                  </div>
                  <div className="flex w-full flex-col gap-[19px]">
                    <DashboardDashboard className="flex flex-1 flex-col gap-[46px] rounded-[12px] bg-indigo-A200 p-[11px]" />
                    <DashboardDashboard className="flex flex-1 flex-col gap-[46px] rounded-[12px] bg-white-A700 p-[11px]" />
                  </div>
                </div>
                <div className="flex flex-col gap-9 rounded-[12px] bg-white-A700 p-3">
                  <div className="mt-0.5 flex items-center justify-between gap-5">
                    <div className="flex w-[31%] items-center justify-center gap-[21px]">
                      <Text size="lg" as="p" className="mb-[3px] self-end !text-gray-800">
                        Summary
                      </Text>
                      <SelectBox
                        color="indigo_A200_14"
                        size="sm"
                        shape="round"
                        indicator={
                          <Img
                            src="images/img_arrowdown_indigo_a200.svg"
                            alt="arrow_down"
                            className="h-[20px] w-[20px]"
                          />
                        }
                        name="sales"
                        placeholder={`Sales`}
                        options={dropDownOptions}
                        className="flex-grow gap-px sm:pr-5"
                      />
                    </div>
                    <div className="flex items-center gap-[7px]">
                      <Text size="s" as="p" className="self-end !text-gray-900_01">
                        Last 7 Days
                      </Text>
                      <Img
                        src="images/img_arrowdown.svg"
                        alt="arrowdown_three"
                        className="h-[16px] w-[16px] self-start"
                      />
                    </div>
                  </div>
                  <div className="flex items-start justify-between gap-5 md:flex-col">
                    <div className="flex flex-col items-start gap-9">
                      <Text size="xs" as="p" className="self-center !text-blue_gray-300">
                        100k
                      </Text>
                      <Text size="xs" as="p" className="self-end text-right !text-blue_gray-300">
                        80k
                      </Text>
                      <Text size="xs" as="p" className="self-end text-right !text-blue_gray-300">
                        60k
                      </Text>
                      <Text size="xs" as="p" className="self-end text-right !text-blue_gray-300">
                        40k
                      </Text>
                      <Text size="xs" as="p" className="self-end text-right !text-blue_gray-300">
                        20k
                      </Text>
                    </div>
                    <div className="flex w-[89%] gap-[45px] md:w-full md:flex-row sm:flex-col">
                      <div className="flex w-full flex-col items-center gap-5 sm:w-full">
                        <div className="w-[33%] rounded-md bg-blue_gray-50_01 pt-[30px] md:w-full sm:pt-5">
                          <div className="h-[211px] w-[13px] rounded-md bg-indigo-A200" />
                        </div>
                        <Text size="xs" as="p" className="text-right !text-gray-400">
                          Sept 10
                        </Text>
                      </div>
                      <div className="flex w-full flex-col items-center gap-5 sm:w-full">
                        <div className="w-[35%] rounded-md bg-blue_gray-50_01 pt-[157px] md:w-full md:pt-5">
                          <div className="h-[84px] w-[13px] rounded-md bg-indigo-A200" />
                        </div>
                        <Text size="xs" as="p" className="text-right !text-gray-400">
                          Sept 11
                        </Text>
                      </div>
                      <div className="flex w-full flex-col items-center gap-5 sm:w-full">
                        <div className="w-[33%] rounded-md bg-blue_gray-50_01 pt-[87px] md:w-full md:pt-5">
                          <div className="h-[154px] w-[13px] rounded-md bg-indigo-A200" />
                        </div>
                        <Text size="xs" as="p" className="text-right !text-gray-400">
                          Sept 12
                        </Text>
                      </div>
                      <div className="flex w-full flex-col items-center gap-5 sm:w-full">
                        <div className="w-[33%] rounded-md bg-blue_gray-50_01 pt-[190px] md:w-full md:pt-5">
                          <div className="h-[51px] w-[13px] rounded-md bg-indigo-A200" />
                        </div>
                        <Text size="xs" as="p" className="text-right !text-gray-400">
                          Sept 13
                        </Text>
                      </div>
                      <div className="flex w-full flex-col items-center gap-5 sm:w-full">
                        <div className="w-[33%] rounded-md bg-blue_gray-50_01 pt-[45px] md:w-full md:pt-5">
                          <div className="h-[196px] w-[13px] rounded-md bg-indigo-A200" />
                        </div>
                        <Text size="xs" as="p" className="text-right !text-gray-400">
                          Sept 14
                        </Text>
                      </div>
                      <div className="flex w-full flex-col items-center gap-5 sm:w-full">
                        <div className="w-[33%] rounded-md bg-blue_gray-50_01 pt-[135px] md:w-full md:pt-5">
                          <div className="h-[106px] w-[13px] rounded-md bg-indigo-A200" />
                        </div>
                        <Text size="xs" as="p" className="text-right !text-gray-400">
                          Sept 15
                        </Text>
                      </div>
                      <div className="flex w-full flex-col items-center gap-5 sm:w-full">
                        <div className="w-[33%] rounded-md bg-blue_gray-50_01 pt-[45px] md:w-full md:pt-5">
                          <div className="h-[196px] w-[13px] rounded-md bg-indigo-A200" />
                        </div>
                        <Text size="xs" as="p" className="text-right !text-gray-400">
                          Sept 16
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <DashboardOrdersummary className="flex w-[39%] flex-col items-start gap-[22px] rounded-[12px] bg-white-A700 p-[19px] md:w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
