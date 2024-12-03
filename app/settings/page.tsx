import React from 'react';
import NextLink from 'next/link';

export default function App(props: { message: string }) {
    return (
        <div className='bg-purple-300 p-4'>
            <p>{props.message}</p>
            <NextLink href="/">Back to home</NextLink>
        </div>
    );
}