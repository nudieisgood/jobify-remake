import Wrapper from "../assets/styledComponents/Stats";
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from "react-icons/fa";
import StatItem from "./StatItem";

const StatsContainer = ({ data }) => {
  const stats = [
    {
      title: "pending applications",
      icon: <FaSuitcaseRolling />,
      count: data?.pending,
      color: "#f59e0b",
      bcg: "#fef3c7",
    },
    {
      title: "interview applications",
      icon: <FaCalendarCheck />,
      count: data?.interview,
      color: "#647acb",
      bcg: "#e0e8f9",
    },
    {
      title: "declined applications",
      icon: <FaBug />,
      count: data?.declined,
      color: "#d66a6a",
      bcg: "#ffeeee",
    },
  ];

  return (
    <Wrapper>
      {stats.map((stat) => {
        return <StatItem key={stat.title} {...stat} />;
      })}
    </Wrapper>
  );
};
export default StatsContainer;
