import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'


export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname //get a path (name)

    const isPublicpath = path === '/login' || path === '/signup' //if having a path name== '/login' or any other normal path then its public path 

    const token = request.cookies.get('token')?.value || '' //user have token or not

    if (isPublicpath && token) { //if have a public path and token then u can access profile page
        return NextResponse.redirect(new URL('/profile', request.nextUrl))
    }
    if (!isPublicpath && !token) {
        return NextResponse.redirect(new URL('/', request.nextUrl));
    }


}

//matching paths
export const config = {
    matcher: [
        '/addTopic',
        '/editTopics',  //u cannot direct access some pages like profile , addTopic , editTopic
        '/profile',
        '/login',
        '/signup'],
}