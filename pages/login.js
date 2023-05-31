import LoginPage from '@/components/reg-login/loginPage'
import React from 'react'

import { getProviders } from "next-auth/react"

import { authOptions } from './api/auth/[...nextauth]';
import { getServerSession } from "next-auth/next"

const Login = () => {
    return (
        <>
            <LoginPage />
        </>
    )
}

export default Login

export async function getServerSideProps(context) {
    const { req } = context;
    // const session = await getSession({ req });
    const session = await getServerSession(context.req, context.res, authOptions);
    const providers = await getProviders()
    if (session) {
        return {
            redirect: { destination: "/" },
        };
    }
    return {
        props: {
            providers
        },
    }
  }