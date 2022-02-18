import {
  DashboardOutlined,
  Tune,
  AssignmentIndOutlined,
  BuildOutlined,
  Group,
  MarkunreadMailbox,
  PeopleAltOutlined,
  TextRotateVerticalSharp,
  BuildRounded,
  DeckOutlined,
  CreateNewFolderOutlined,
  CreditCardOutlined,
  TabletAndroidOutlined,
  TagFacesOutlined,
  DashboardTwoTone,
  AddToHomeScreenSharp,
  ShowChart,
} from "@material-ui/icons";
import BudgetHeads from "../views/accounts/BudgetHeads";
import Funds from "../views/accounts/Funds";
import SubBudgetHeads from "../views/accounts/SubBudgetHeads";
import Staff from "../views/administration/auth/Staff";
import Departments from "../views/administration/Departments";
import GradeLevels from "../views/administration/GradeLevels";
import Groups from "../views/administration/Groups";
import Modules from "../views/administration/Modules";
import Roles from "../views/administration/Roles";
import ServiceCategory from "../views/administration/ServiceCategory";
import Settings from "../views/configurations/Settings";
import Tags from "../views/commons/Tags";
import Dashboard from "../views/Dashboard";
import Company from "../views/procurement/Company";
import Projects from "../views/procurement/Projects";
import Config from "../views/configurations/Config";
import Biddings from "../views/procurement/Biddings";
import ProjectDetails from "../views/procurement/ProjectDetails";

const routes = [
  {
    label: "Dashboard",
    icon: <DashboardOutlined />,
    path: "/",
    component: <Dashboard />,
    menu: true,
  },
  {
    label: "Settings",
    icon: <Tune />,
    path: "/settings",
    component: <Settings />,
    menu: true,
  },
  {
    label: "Configuration",
    icon: <AddToHomeScreenSharp />,
    path: "/configuration",
    component: <Config />,
    menu: true,
  },
  {
    label: "Roles",
    icon: <AssignmentIndOutlined />,
    path: "/roles",
    component: <Roles />,
    menu: true,
  },
  {
    label: "Departments",
    icon: <BuildOutlined />,
    path: "/departments",
    component: <Departments />,
    menu: true,
  },
  {
    label: "Groups",
    icon: <Group />,
    path: "/groups",
    component: <Groups />,
    menu: true,
  },
  {
    label: "Grade Levels",
    icon: <MarkunreadMailbox />,
    path: "/grade-levels",
    component: <GradeLevels />,
    menu: true,
  },
  {
    label: "Staff",
    icon: <PeopleAltOutlined />,
    path: "/staff",
    component: <Staff />,
    menu: true,
  },
  {
    label: "Service Categories",
    icon: <TextRotateVerticalSharp />,
    path: "/service/categories",
    component: <ServiceCategory />,
    menu: true,
  },
  {
    label: "Companies",
    icon: <BuildRounded />,
    path: "/vendors",
    component: <Company />,
    menu: true,
  },
  {
    label: "Budget Heads",
    icon: <DeckOutlined />,
    path: "/budget-heads",
    component: <BudgetHeads />,
    menu: true,
  },
  {
    label: "Sub Budget Heads",
    icon: <CreateNewFolderOutlined />,
    path: "/sub-budget-heads",
    component: <SubBudgetHeads />,
    menu: true,
  },
  {
    label: "Funds",
    icon: <CreditCardOutlined />,
    path: "/funds",
    component: <Funds />,
    menu: true,
  },
  {
    label: "Modules",
    icon: <TabletAndroidOutlined />,
    path: "/modules",
    component: <Modules />,
    menu: true,
  },
  {
    label: "Tags",
    icon: <TagFacesOutlined />,
    path: "/tags",
    component: <Tags />,
    menu: true,
  },
  {
    label: "Projects",
    icon: <DashboardTwoTone />,
    path: "/projects",
    component: <Projects />,
    menu: true,
  },
  {
    label: "Bidding",
    icon: <ShowChart />,
    path: "/bidding",
    component: <Biddings />,
    menu: true,
  },
  {
    label: "Project Details",
    icon: <ShowChart />,
    path: "/bidding/projects/:project/details",
    component: <ProjectDetails />,
    menu: false,
  },
];

export default routes;
