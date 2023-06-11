import { Box, VStack, HStack, Text } from "@chakra-ui/react";
import { FaCcVisa, FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoIosContact } from "react-icons/io";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";

const GNB = [
  { title: "Home", href: "/", icon: FaHome },
  { title: "Profile", href: "/profile", icon: CgProfile },
  { title: "Contact", href: "/contact", icon: IoIosContact },
];
export default function Layout({ children, canGoBack, title }) {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const HandleCLick = () => {
    // console.log("it's playing?");
    navigate(-1);
  };

  return (
    <>
      <Box w="full" display="flex" justifyContent={"center"}>
        <VStack w={"sm"}>
          {/* Header */}
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            w={"inherit"}
            height={"120px"}
            bg={"black"}
            position={"fixed"}
            top={0}
            zIndex={9}
          >
            {canGoBack ? (
              <Box
                onClick={HandleCLick}
                position={"absolute"}
                left={"20px"}
                cursor={"pointer"}
              >
                <AiOutlineArrowLeft color="white" size={"20px"} />
              </Box>
            ) : null}

            {canGoBack ? (
              <Text color={"white"}>{title}</Text>
            ) : (
              <FaCcVisa size={32} color="white" />
            )}
          </Box>

          {/* Main */}
          {children}

          {/* Footer */}
          {canGoBack ? null : (
            <Box
              w={"inherit"}
              height={"120px"}
              bg={"black"}
              position={"fixed"}
              bottom={0}
            >
              <HStack
                h={"inherit"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                {GNB.map((item) => (
                  <Box w={"full"}>
                    <Link to={item.href}>
                      <VStack w={"full"}>
                        <item.icon
                          size={"30px"}
                          color={
                            location.pathname === item.href
                              ? "rgba(255, 255, 255, 0.5)"
                              : "white"
                          }
                        />
                        <Text
                          color={
                            location.pathname === item.href
                              ? "rgba(255, 255, 255, 0.5)"
                              : "white"
                          }
                        >
                          {item.title}
                        </Text>
                      </VStack>
                    </Link>
                  </Box>
                ))}
              </HStack>
            </Box>
          )}
        </VStack>
      </Box>
    </>
  );
}
