import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const FullPage = styled.div`
    height: 100vh;
    background-color: var(--color-grey-50);
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  // Step : Load authenticated users
  const { isAuthenticated, isLoading } = useUser();

  // Step 2: if there is no authenticated users, redirect to login page
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  // Step 3: Show Spinner while loading
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // Step 4: If there is a user, render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
