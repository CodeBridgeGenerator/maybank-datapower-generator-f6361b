import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import NoMatch from './NoMatch';

import LoginPage from '../components/LoginPage/LoginPage';
import SignUpPage from '../components/LoginPage/SignUpPage';
import Account from '../components/Account/Account';
import Dashboard from '../components/Dashboard/Dashboard';

import UsersPage from "../components/UsersPage/UsersPage";
import SingleUsersPage from "../components/UsersPage/SingleUsersPage";
import DomainsPage from "../components/DomainsPage/DomainsPage";
import SingleDomainsPage from "../components/DomainsPage/SingleDomainsPage";
import BbroutingPage from "../components/BbroutingPage/BbroutingPage";
import SingleBbroutingPage from "../components/BbroutingPage/SingleBbroutingPage";
import ConnectionsPage from "../components/ConnectionsPage/ConnectionsPage";
import SingleConnectionsPage from "../components/ConnectionsPage/SingleConnectionsPage";
import ContextPage from "../components/ContextPage/ContextPage";
import SingleContextPage from "../components/ContextPage/SingleContextPage";
import HeadersPage from "../components/HeadersPage/HeadersPage";
import SingleHeadersPage from "../components/HeadersPage/SingleHeadersPage";
import GatewayPage from "../components/GatewayPage/GatewayPage";
import SingleGatewayPage from "../components/GatewayPage/SingleGatewayPage";
import NameValuePage from "../components/NameValuePage/NameValuePage";
import SingleNameValuePage from "../components/NameValuePage/SingleNameValuePage";
import FileOpenPage from "../components/FileOpenPage/FileOpenPage";
import SingleFileOpenPage from "../components/FileOpenPage/SingleFileOpenPage";
import JSONPage from "../components/JSONPage/JSONPage";
import SingleJSONPage from "../components/JSONPage/SingleJSONPage";
import JsonwebPage from "../components/JsonwebPage/JsonwebPage";
import SingleJsonwebPage from "../components/JsonwebPage/SingleJsonwebPage";
import XmlsPage from "../components/XmlsPage/XmlsPage";
import SingleXmlsPage from "../components/XmlsPage/SingleXmlsPage";
// ~cb-add-import~

const MyRouter = () => {
    return (
        <Routes>
            <Route path="" exact element={<Dashboard />} />
            <Route path="/dashboard" exact element={<Dashboard />} />
            <Route path="/login" exact element={<LoginPage />} />
            <Route path="/signup" exact element={<SignUpPage />} />
            {/* protected route https://www.robinwieruch.de/react-router-private-routes/ */}

            <Route element={<ProtectedRoute redirectPath={'/login'} />}>
                <Route path="/account" exact element={<Account />} />
                    <Route path="/users" exact element={<UsersPage />} />
                    <Route path="/users/:singleUsersId" exact element={<SingleUsersPage />} />
                    <Route path="/domains" exact element={<DomainsPage />} />
                    <Route path="/domains/:singleDomainsId" exact element={<SingleDomainsPage />} />
                    <Route path="/bbrouting" exact element={<BbroutingPage />} />
                    <Route path="/domains/:singleDomainId/bbrouting" exact element={<BbroutingDomainPage />} />
                    <Route path="/connections" exact element={<ConnectionsPage />} />
                    <Route path="/connections/:singleConnectionsId" exact element={<SingleConnectionsPage />} />
                    <Route path="/context" exact element={<ContextPage />} />
                    <Route path="/domains/:singleDomainId/context" exact element={<ContextDomainPage />} />
                    <Route path="/headers" exact element={<HeadersPage />} />
                    <Route path="/domains/:singleDomainId/headers" exact element={<HeaderDomainPage />} />
                    <Route path="/gateway" exact element={<GatewayPage />} />
                    <Route path="/domains/:singleDomainId/gateway" exact element={<GatewayDomainPage />} />
                    <Route path="/nameValue" exact element={<NameValuePage />} />
                    <Route path="/nameValue/:singleNameValueId" exact element={<SingleNameValuePage />} />
                    <Route path="/fileOpen" exact element={<FileOpenPage />} />
                    <Route path="/domains/:singleDomainId/fileOpen" exact element={<FileOpenDomainPage />} />
                    <Route path="/jSON" exact element={<JSONPage />} />
                    <Route path="/domains/:singleDomainId/jSON" exact element={<JSONDomainPage />} />
                    <Route path="/jsonweb" exact element={<JsonwebPage />} />
                    <Route path="/jsonweb/:singleJsonwebId" exact element={<SingleJsonwebPage />} />
                    <Route path="/xmls" exact element={<XmlsPage />} />
                    <Route path="/domains/:singleDomainId/xmls" exact element={<XmlDomainPage />} />
                {/* ~cb-add-protected-route~ */}
            </Route>
            {/* ~cb-add-route~ */}

            <Route path="*" element={<NoMatch />} />
        </Routes>
    );
};

export default MyRouter;
