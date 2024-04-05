import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Input, Img, Text, Button, SelectBox } from "../../components";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function MessagesPage() {
  const [searchBarValue1, setSearchBarValue1] = React.useState("");
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
          width="90px !important"
          collapsedWidth="80px !important"
          collapsed={collapsed}
          className="!sticky top-0 flex h-screen flex-col gap-[78px] overflow-auto bg-white-A700 p-3.5 md:hidden md:gap-[58px] md:p-5 sm:gap-[39px]"
        >
          <Img src="images/img_user_indigo_200.svg" alt="user_one" className="h-[52px] w-[52px]" />
          <Menu
            menuItemStyles={{
              button: {
                padding: 0,
                borderRadius: "12px",
                [`&:hover, &.ps-active`]: { backgroundColor: "#5570f1 !important" },
              },
            }}
            rootStyles={{ ["&>ul"]: { gap: "464px" } }}
            className="mb-[5px] flex w-full flex-col self-stretch pb-[127px] md:pb-5"
          >
            <div className="flex flex-col">
              <MenuItem
                icon={<Img src="images/img_grid_blue_gray_700.svg" alt="grid_one" className="h-[24px] w-[24px]" />}
              />
              <MenuItem icon={<Img src="images/img_bag.svg" alt="bag_one" className="h-[24px] w-[24px]" />} />
              <MenuItem icon={<Img src="images/img_settings.svg" alt="settings_one" className="h-[24px] w-[24px]" />} />
              <MenuItem
                icon={
                  <Img src="images/img_iconly_light_folder.svg" alt="iconlylight_one" className="h-[24px] w-[24px]" />
                }
              />
              <MenuItem
                icon={<Img src="images/img_user_white_a700.svg" alt="user_three" className="h-[24px] w-[24px]" />}
              />
              <MenuItem icon={<Img src="images/img_search.svg" alt="search_one" className="h-[24px] w-[24px]" />} />
            </div>
            <div className="flex flex-col">
              <MenuItem
                icon={<Img src="images/img_fi_headphones.svg" alt="fiheadphones" className="h-[24px] w-[24px]" />}
              />
              <MenuItem>
                <div className="flex flex-col self-end pb-[46px] md:pb-5">
                  <Img src="images/img_fi_gift.svg" alt="figift_one" className="h-[24px]" />
                </div>
              </MenuItem>
              <MenuItem>
                <div className="flex flex-col items-center self-end pb-[11px] pr-[11px]">
                  <Img src="images/img_thumbs_up.svg" alt="thumbsup_one" className="mb-[118px] h-[24px] w-[24px]" />
                </div>
              </MenuItem>
            </div>
          </Menu>
        </Sidebar>
        <div className="flex flex-1 flex-col gap-[23px] pb-12 md:self-stretch md:p-5 md:pb-5">
          <header>
            <div>
              <div className="bg-white-A700 p-3.5">
                <div className="flex items-center justify-between gap-5 sm:flex-col">
                  <Text size="xl" as="p" className="self-start !font-poppins !text-gray-800">
                    Conversations
                  </Text>
                  <div className="flex w-[19%] items-center justify-center gap-5 sm:w-full">
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
                <div className="ml-4 flex w-[26%] md:ml-0 md:w-full md:p-5">
                  <div className="flex items-center gap-[11px]">
                    <Img src="images/img_home.svg" alt="home_one" className="h-[16px] w-[16px]" />
                    <div className="flex flex-wrap items-center gap-[11px] self-start">
                      <Text size="s" as="p">
                        /
                      </Text>
                      <Text size="s" as="p">
                        Conversations
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="flex w-[97%] flex-col gap-5 md:w-full">
            <div className="flex items-center justify-between gap-5">
              <Text size="lg" as="p" className="!text-gray-800">
                Conversations with Customers
              </Text>
              <Button color="indigo_A200" size="md" className="min-w-[161px] rounded-[12px] sm:px-5">
                New Message
              </Button>
            </div>
            <div className="flex gap-5 md:flex-col">
              <div className="flex w-[32%] flex-col items-center gap-[25px] rounded-[12px] bg-white-A700 pt-[21px] md:w-full sm:pt-5">
                <div className="flex w-[89%] flex-col gap-3.5 md:w-full md:p-5">
                  <div className="flex flex-wrap justify-between gap-5">
                    <Text size="xl" as="p" className="!font-poppins !text-blue_gray-900_01">
                      Contacts
                    </Text>
                    <Text size="xl" as="p" className="text-right !font-poppins !text-blue_gray-300">
                      34
                    </Text>
                  </div>
                  <Input
                    color="blue_gray_100"
                    size="xs"
                    shape="round"
                    name="search"
                    placeholder={`Search`}
                    value={searchBarValue1}
                    onChange={(e) => setSearchBarValue1(e)}
                    prefix={
                      <Img src="images/img_rewind.svg" alt="rewind" className="h-[20px] w-[20px] cursor-pointer" />
                    }
                    suffix={
                      searchBarValue1?.length > 0 ? (
                        <CloseSVG onClick={() => setSearchBarValue1("")} fillColor="#130f26ff" />
                      ) : null
                    }
                    className="gap-4 text-blue_gray-200 sm:pr-5"
                  />
                </div>
                <div className="flex flex-col gap-11 self-stretch">
                  <div className="flex flex-col gap-px">
                    <div className="flex flex-1 gap-3.5 border-r-4 border-solid border-indigo-A200 bg-gray-50 p-[11px]">
                      <Img
                        src="images/img_play_gray_100_01.png"
                        alt="jane_doe_one"
                        className="h-[48px] w-[15%] object-cover"
                      />
                      <div className="flex flex-1 flex-col gap-[11px]">
                        <div className="flex flex-wrap items-center justify-between gap-5">
                          <Text size="lg" as="p" className="!text-gray-800">
                            Jane Doe
                          </Text>
                          <Text
                            size="s"
                            as="p"
                            className="flex h-[19px] items-end justify-end rounded-lg bg-lime-50 px-[7px] py-0.5 text-right !text-gray-900_01"
                          >
                            New
                          </Text>
                        </div>
                        <div className="flex gap-[7px] self-start">
                          <Text as="p">Hi, i want make enquiries about yo...</Text>
                          <div className="flex">
                            <Text size="s" as="p" className="text-right">
                              12:55 am
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 gap-3.5 border-b border-solid border-gray-100_01 p-3">
                      <Img
                        src="images/img_play_gray_100_01_48x51.png"
                        alt="play_one"
                        className="h-[48px] w-[15%] object-cover"
                      />
                      <div className="flex flex-1 flex-col gap-2.5">
                        <div className="flex flex-wrap items-center justify-between gap-5">
                          <Text size="lg" as="p" className="!text-gray-800">
                            Janet Adebayo
                          </Text>
                          <Text
                            size="s"
                            as="p"
                            className="flex h-[19px] items-end justify-end self-start rounded-lg bg-lime-50 px-[7px] py-0.5 text-right !text-gray-900_01"
                          >
                            New
                          </Text>
                        </div>
                        <div className="flex gap-[7px] self-start">
                          <Text as="p">Hi, i want make enquiries about yo...</Text>
                          <div className="flex">
                            <Text size="s" as="p" className="text-right">
                              12:55 am
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 gap-3.5 border-b border-solid border-gray-100_01 p-[11px]">
                      <Img
                        src="images/img_thumbs_up_gray_100_01.png"
                        alt="thumbsup_one"
                        className="h-[48px] w-[15%] object-cover"
                      />
                      <div className="flex flex-1 flex-col gap-[11px]">
                        <div className="flex flex-wrap items-center justify-between gap-5">
                          <Text size="lg" as="p" className="!text-gray-800">
                            Kunle Adekunle
                          </Text>
                          <Text
                            size="s"
                            as="p"
                            className="flex h-[19px] items-end justify-end rounded-lg bg-lime-50 px-[7px] py-0.5 text-right !text-gray-900_01"
                          >
                            New
                          </Text>
                        </div>
                        <div className="flex gap-[7px] self-start">
                          <Text as="p">Hi, i want make enquiries about yo...</Text>
                          <div className="flex">
                            <Text size="s" as="p" className="text-right">
                              12:55 am
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 gap-3.5 border-b border-solid border-gray-100_01 p-3">
                      <Img
                        src="images/img_thumbs_up_gray_100_01.png"
                        alt="thumbsup_one"
                        className="h-[48px] w-[15%] object-cover"
                      />
                      <div className="flex flex-1 flex-col gap-[7px]">
                        <div className="flex flex-wrap items-center justify-between gap-5">
                          <Text size="lg" as="p" className="!text-gray-800">
                            Jane Doe
                          </Text>
                          <Text
                            as="p"
                            className="flex h-[24px] w-[24px] items-center justify-center rounded-[12px] bg-orange-200 text-center !text-gray-900_01"
                          >
                            2
                          </Text>
                        </div>
                        <div className="flex gap-[7px] self-start">
                          <Text as="p">Hi, i want make enquiries about yo...</Text>
                          <div className="flex">
                            <Text size="s" as="p" className="text-right">
                              12:55 am
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 justify-center gap-3.5 border-b border-solid border-gray-100_01 p-3">
                      <Img
                        src="images/img_thumbs_up_gray_100_01.png"
                        alt="thumbsup_one"
                        className="h-[48px] w-[15%] object-cover"
                      />
                      <div className="flex flex-col items-start gap-[11px]">
                        <Text size="lg" as="p" className="!text-gray-800">
                          Janet Adebayo
                        </Text>
                        <div className="flex gap-[7px]">
                          <Text as="p">Hi, i want make enquiries about yo...</Text>
                          <div className="flex">
                            <Text size="s" as="p" className="text-right">
                              12:55 am
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 justify-center gap-3.5 border-b border-solid border-gray-100_01 p-[11px]">
                      <Img
                        src="images/img_play_gray_100_01_48x51.png"
                        alt="play_one"
                        className="h-[48px] w-[15%] object-cover"
                      />
                      <div className="flex flex-col items-start gap-[11px]">
                        <Text size="lg" as="p" className="!text-gray-800">
                          Kunle Adekunle
                        </Text>
                        <div className="flex gap-[7px]">
                          <Text as="p">Hi, i want make enquiries about yo...</Text>
                          <div className="flex">
                            <Text size="s" as="p" className="text-right">
                              12:55 am
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 justify-center gap-3.5 border-b border-solid border-gray-100_01 p-3">
                      <Img
                        src="images/img_play_gray_100_01_48x51.png"
                        alt="play_one"
                        className="h-[48px] w-[15%] object-cover"
                      />
                      <div className="flex flex-col items-start gap-[9px]">
                        <Text size="lg" as="p" className="!text-gray-800">
                          Jane Doe
                        </Text>
                        <div className="flex gap-[7px]">
                          <Text as="p">Hi, i want make enquiries about yo...</Text>
                          <div className="flex">
                            <Text size="s" as="p" className="text-right">
                              12:55 am
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 justify-center gap-3.5 border-b border-solid border-gray-100_01 p-3">
                      <Img
                        src="images/img_play_gray_100_01_48x51.png"
                        alt="play_one"
                        className="h-[48px] w-[15%] object-cover"
                      />
                      <div className="flex flex-col items-start gap-[11px]">
                        <Text size="lg" as="p" className="!text-gray-800">
                          Janet Adebayo
                        </Text>
                        <div className="flex gap-[7px]">
                          <Text as="p">Hi, i want make enquiries about yo...</Text>
                          <div className="flex">
                            <Text size="s" as="p" className="text-right">
                              12:55 am
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 justify-center gap-3.5 border-b border-solid border-gray-100_01 p-[11px]">
                      <Img
                        src="images/img_play_gray_100_01_48x51.png"
                        alt="play_one"
                        className="h-[48px] w-[15%] object-cover"
                      />
                      <div className="flex flex-col items-start gap-[11px]">
                        <Text size="lg" as="p" className="!text-gray-800">
                          Kunle Adekunle
                        </Text>
                        <div className="flex gap-[7px]">
                          <Text as="p">Hi, i want make enquiries about yo...</Text>
                          <div className="flex">
                            <Text size="s" as="p" className="text-right">
                              12:55 am
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 justify-evenly gap-3.5 border-b border-solid border-gray-100_01 pt-[11px]">
                      <Img
                        src="images/img_thumbs_up_gray_100_01.png"
                        alt="thumbsup_one"
                        className="h-[16px] w-[12%] object-cover"
                      />
                      <div className="flex w-[73%] flex-col gap-[15px]">
                        <div className="flex self-start">
                          <Text size="lg" as="p" className="!text-gray-800">
                            Kunle Adekunle
                          </Text>
                        </div>
                        <div className="flex flex-wrap gap-[7px] self-start">
                          <Text as="p">Hi, i want make enquiries about yo...</Text>
                          <Text size="s" as="p" className="self-start text-right">
                            12:55 am
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-solid border-gray-100_01 px-3 pt-3">
                    <div className="flex gap-3.5">
                      <Img
                        src="images/img_thumbs_up_gray_100_01.png"
                        alt="image"
                        className="h-px w-[15%] object-cover"
                      />
                      <div className="flex flex-1 flex-col gap-[87px] md:gap-[65px] sm:gap-[43px]">
                        <div className="flex self-start">
                          <Text size="lg" as="p" className="!text-gray-800">
                            Kunle Adekunle
                          </Text>
                        </div>
                        <div className="flex flex-wrap justify-between gap-5">
                          <Text as="p">Macbook Pro</Text>
                          <Text size="s" as="p" className="text-right">
                            12:55 am
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center gap-[17px] rounded-[12px] bg-white-A700 md:self-stretch">
                <div className="flex gap-3.5 self-stretch border-b border-solid border-gray-100_01 p-[15px] md:flex-col">
                  <Img
                    src="images/img_rectangle_3_60x60.png"
                    alt="image_one"
                    className="h-[60px] w-[60px] rounded-lg object-cover md:w-full"
                  />
                  <div className="flex flex-1 flex-col gap-[11px] md:self-stretch">
                    <div className="flex items-center justify-between gap-5">
                      <Text size="lg" as="p" className="!text-gray-800">
                        Jane Doe
                      </Text>
                      <div className="flex flex-wrap items-center gap-3">
                        <Text
                          size="s"
                          as="p"
                          className="flex h-[19px] items-end justify-end rounded-lg bg-lime-50 px-[7px] py-0.5 text-right !text-gray-900_01"
                        >
                          New Customer
                        </Text>
                        <Text as="p" className="text-right !text-indigo-A200">
                          View Profile
                        </Text>
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-5">
                      <div className="flex w-[17%] justify-between gap-5 self-end">
                        <div className="flex w-full items-center justify-center gap-1">
                          <div className="w-[22%] rounded-md bg-gray-50_01 p-0.5">
                            <div className="h-[8px] w-[8px] rounded bg-indigo-A200" />
                          </div>
                          <Text as="p" className="!text-indigo-100_01">
                            Online
                          </Text>
                        </div>
                        <div className="flex">
                          <Text as="p" className="text-right">
                            12:55 am
                          </Text>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Img src="images/img_bag.svg" alt="bag_three" className="h-[20px] w-[20px]" />
                        <Text as="p" className="!text-blue_gray-300">
                          0 Orders
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-[94%] flex-col items-center gap-5 md:w-full md:p-5">
                  <Button color="gray_100" size="sm" shape="round" className="min-w-[128px]">
                    12 August 2022
                  </Button>
                  <div className="flex flex-col items-center gap-[19px] self-stretch">
                    <div className="flex w-[42%] flex-col items-start gap-[7px] self-start md:w-full">
                      <div className="self-stretch border-b border-solid border-gray-100_01 pb-3">
                        <div className="flex items-center gap-3.5">
                          <Img
                            src="images/img_rectangle_3.png"
                            alt="image_two"
                            className="h-[49px] w-[49px] rounded-lg object-cover"
                          />
                          <div className="flex flex-1 flex-col gap-2.5 self-start">
                            <div className="flex self-start">
                              <Text as="p" className="!text-gray-800">
                                iPhone 13
                              </Text>
                            </div>
                            <div className="flex items-center justify-between gap-5">
                              <div className="flex">
                                <Text as="p" className="!font-medium !text-blue_gray-900">
                                  ₦730,000.00
                                </Text>
                              </div>
                              <div className="flex self-end">
                                <Text size="s" as="p" className="!font-medium !text-indigo-A200">
                                  <span className="text-indigo-A200">12&nbsp;</span>
                                  <span className="text-blue_gray-300">In Stock</span>
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] bg-indigo-A200 p-4">
                        <Text size="lg" as="p" className="!font-normal leading-6 !text-white-A700">
                          <>
                            Hello, I want to make enquiries about your
                            <br />
                            product
                          </>
                        </Text>
                      </div>
                      <Text size="lg" as="p" className="!font-normal">
                        12:55 am
                      </Text>
                    </div>
                    <div className="flex flex-col items-end gap-[7px]">
                      <Button
                        color="orange_50_01"
                        size="xl"
                        className="min-w-[325px] rounded-bl-[16px] rounded-tl-[16px] rounded-tr-[16px]"
                      >
                        Hello Janet, thank you for reaching out
                      </Button>
                      <div className="flex gap-[7px]">
                        <Text size="lg" as="p" className="self-start !font-normal">
                          12:57 am
                        </Text>
                        <Button color="orange_50_01" size="xs" shape="circle" className="w-[20px] !rounded-[10px]">
                          <Img src="images/img_arrowdown.svg" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-[7px]">
                      <div className="flex rounded-bl-[16px] rounded-tl-[16px] rounded-tr-[16px] bg-orange-50_01 p-4">
                        <Text size="lg" as="p" className="self-end !font-normal !text-gray-900_01">
                          What do you need to know?
                        </Text>
                      </div>
                      <div className="flex gap-[7px]">
                        <Text size="lg" as="p" className="self-start !font-normal">
                          12:57 am
                        </Text>
                        <Button color="orange_50_01" size="xs" shape="circle" className="w-[20px] !rounded-[10px]">
                          <Img src="images/img_arrowdown.svg" />
                        </Button>
                      </div>
                    </div>
                    <Button color="gray_100" size="sm" shape="round" className="min-w-[65px]">
                      Today
                    </Button>
                    <div className="flex flex-col items-start gap-[7px] self-stretch">
                      <div className="flex w-[47%] justify-center rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] bg-indigo-A200 p-4 md:w-full">
                        <Text size="lg" as="p" className="!font-normal leading-6 !text-white-A700">
                          <>
                            I want to know if the price is negotiable, i need <br />
                            about 2 Units
                          </>
                        </Text>
                      </div>
                      <Text size="lg" as="p" className="!font-normal">
                        12:55 am
                      </Text>
                    </div>
                  </div>
                </div>
                <Input
                  shape="round"
                  name="message"
                  placeholder={`Your message`}
                  prefix={
                    <div className="flex h-[32px] w-[32px] items-center justify-center rounded-lg bg-orange-50">
                      <Img src="images/img_fiplus.svg" alt="fi:plus" className="h-[24px] w-[24px]" />
                    </div>
                  }
                  suffix={<Img src="images/img_save.svg" alt="save" className="h-[20px] w-[20px]" />}
                  className="mb-[17px] w-[95%] gap-[19px] sm:pr-5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
