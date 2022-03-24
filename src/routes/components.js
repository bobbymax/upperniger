import { lazy } from "react";

const Dashboard = lazy(() => import("../views/Dashboard"));
const Modules = lazy(() => import("../views/administration/Modules"));
const Roles = lazy(() => import("../views/administration/Roles"));
const Groups = lazy(() => import("../views/administration/Groups"));
const Departments = lazy(() => import("../views/administration/Departments"));
const GradeLevels = lazy(() => import("../views/administration/GradeLevels"));
const Staff = lazy(() => import("../views/administration/auth/Staff"));
const AssignRole = lazy(() =>
  import("../views/administration/auth/AssignRole")
);
const UserProfile = lazy(() =>
  import("../views/administration/auth/UserProfile")
);
const ServiceCategory = lazy(() =>
  import("../views/administration/ServiceCategory")
);
const BudgetHeads = lazy(() => import("../views/accounts/BudgetHeads"));
const Funds = lazy(() => import("../views/accounts/Funds"));
const SubBudgetHeads = lazy(() => import("../views/accounts/SubBudgetHeads"));
const Login = lazy(() => import("../views/auth/Login"));
const Tags = lazy(() => import("../views/commons/Tags"));
const Settings = lazy(() => import("../views/configurations/Settings"));
const Config = lazy(() => import("../views/configurations/Config"));

const Biddings = lazy(() => import("../views/procurement/Biddings"));
const Bids = lazy(() => import("../views/procurement/Bids"));
const PlaceBid = lazy(() => import("../views/procurement/PlaceBid"));
const BidAnalysis = lazy(() => import("../views/procurement/BidAnalysis"));
const Company = lazy(() => import("../views/procurement/Company"));
const VendorCheck = lazy(() => import("../views/procurement/VendorCheck"));
const ManageVendor = lazy(() => import("../views/procurement/ManageVendor"));
const ProjectDetails = lazy(() =>
  import("../views/procurement/ProjectDetails")
);
const Projects = lazy(() => import("../views/procurement/Projects"));
const RequiredDocuments = lazy(() =>
  import("../views/procurement/RequiredDocuments")
);

export const pages = {
  authentication: {
    name: "Login",
    component: <Login />,
    path: "/login",
  },
  protected: [
    {
      name: "Dashboard",
      component: <Dashboard />,
      path: "/",
    },
    {
      name: "Modules",
      component: <Modules />,
      path: "/modules",
    },
    {
      name: "Roles",
      component: <Roles />,
      path: "/roles",
    },
    {
      name: "Groups",
      component: <Groups />,
      path: "/groups",
    },
    {
      name: "Departments",
      component: <Departments />,
      path: "/departments",
    },
    {
      name: "Grade Levels",
      component: <GradeLevels />,
      path: "/grade-levels",
    },
    {
      name: "Staff",
      component: <Staff />,
      path: "/staff",
    },
    {
      name: "Departments",
      component: <Departments />,
      path: "/departments",
    },
    {
      name: "Profile",
      component: <UserProfile />,
      path: "/auth/profile",
    },
    {
      name: "Service Categories",
      component: <ServiceCategory />,
      path: "/service/categories",
    },
    {
      name: "Budget Heads",
      component: <BudgetHeads />,
      path: "/budget-heads",
    },
    {
      name: "Funds",
      component: <Funds />,
      path: "/funds",
    },
    {
      name: "Sub Budget Heads",
      component: <SubBudgetHeads />,
      path: "/sub-budget-heads",
    },
    {
      name: "Tags",
      component: <Tags />,
      path: "/tags",
    },
    {
      name: "Settings",
      component: <Settings />,
      path: "/settings",
    },
    {
      name: "Portal Configuration",
      component: <Config />,
      path: "/configuration",
    },
    {
      name: "Project Biddings",
      component: <Biddings />,
      path: "/bidding",
    },
    {
      name: "Bid Invitations",
      component: <Bids />,
      path: "/bid/invitations",
    },
    {
      name: "Place Bids",
      component: <PlaceBid />,
      path: "/projects/:id/bid",
    },
    {
      name: "Evaluate Bids",
      component: <BidAnalysis />,
      path: "/project/:id/bids",
    },
    {
      name: "Check Vendor",
      component: <VendorCheck />,
      path: "/evaluate/:id/company",
    },
    {
      name: "Vendors",
      component: <Company />,
      path: "/vendors",
    },
    {
      name: "Manage Vendor",
      component: <ManageVendor />,
      path: "/vendors/:id/manage",
    },
    {
      name: "Projects",
      component: <Projects />,
      path: "/projects",
    },
    {
      name: "Project Details",
      component: <ProjectDetails />,
      path: "/bidding/projects/:project/details",
    },
    {
      name: "Assign Role to Staff",
      component: <AssignRole />,
      path: "/assign/roles",
    },
    {
      name: "Required Documents",
      component: <RequiredDocuments />,
      path: "/documents/required",
    },
  ],
  private: [],
};
