import React from 'react'
import Link from 'next/link';
import { Button } from '../ui/button';

interface BackButtonProps {
    href: string;
    label: string
}

const BackButton = ({href, label} : BackButtonProps) => {
  return (
    <Button variant='link' className='font-normal mx-auto' size="sm" asChild>
        <Link href={href}>
            {label}
        </Link>
    </Button>
  )
}

export default BackButton
