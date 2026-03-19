import { createBrowserRouter } from "react-router-dom"
import LoginPage from "../pages/LoginPage"
import DashboardPage from "../pages/DashboardPage"
import MainLayout from "../components/layout/MainLayout"
import ProtectedRoute from "./ProtectedRoute"
import EducationalContentPage from "../pages/EducationalContentPage"
import GarageApprovalsPage from "../pages/GarageApprovalPage"
import UserManagementPage from "../pages/UserManagementPage"
import SettingsPage from "../pages/SettingsPage"
import CommunityModerationPage from "../pages/CommunityModerationPage"
import NotificationPage from "../pages/NotificationPage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },

  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <MainLayout />,
        children: [
          { path: "/dashboard", element: <DashboardPage /> },

          { path: "/garage-approvals", element: <GarageApprovalsPage /> },
          { path: "/users", element: <UserManagementPage /> },
          { path: "/educational-content", element: <EducationalContentPage /> },
          { path: "/community-moderation", element: <CommunityModerationPage /> },
          { path: "/settings", element: <SettingsPage /> },
          { path: "/notifications", element: <NotificationPage /> }
        ],
      },
    ],
  },
])