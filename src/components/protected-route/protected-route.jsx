import React from 'react';
import { Navigate } from 'react-router-dom';
import AdminDashboardWrapper from '../admin-dashboard-wrapper/admin-dashboard-wrapper';

export default function ProtectedRoute({ isLogined }) {
  if (!isLogined) return <Navigate to="/admin" />;

  return <AdminDashboardWrapper />;
}
