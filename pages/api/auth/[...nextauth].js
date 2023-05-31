import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    secret: process.env.NextAuth_SECRET,

    providers: [

        //=================================================================//
        // Credentials auth management
        //=================================================================//
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            async authorize(credentials, req) {
                // console.log("========type of login fdata00",credentials)
                if (credentials) {
                    // console.log("========type of login fdata00",typeof(credentials))
                    let user;
                    user = credentials
                    return user;
                } else return null;
            },
        })

    ],

    callbacks: {

        async signIn({ account, profile }) {
            let flag = true;
            //=================================================================//
            // Credentials auth management
            //=================================================================//

            if (account.provider == "credentials") {
                flag = true
            }
            return flag
        },
        async jwt({ token, user }) {
            return { ...token, ...user };
        },

        async session({ session, token, user }) {

            let obj = { "email": token.email}
            // console.log(token,'============token info');
            const datauser = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/users/profile`, {
                method: "POST",
                headers: { 'authorization': token?.access_token },
                body: JSON.stringify(obj)
            }).then(response => response.json());

            // console.log(datauser,'========data');

            if (datauser.data.message === 'User Not Authorised') {
                console.log('==========user session expire')
                session.message = 'unauthorized';
            }
            else {
                // console.log(datauser?.data?.data,'==========user data')
                session.user = datauser?.data?.data;
                session.message = 'authorized';
            }
            return session;
        }

    },
    pages: {
        signIn: '/login'
    },

}

export default NextAuth(authOptions);