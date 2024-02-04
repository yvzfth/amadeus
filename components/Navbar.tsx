import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from '@/utils/index';
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react';
import { Title } from '@tremor/react';

export default function NavbaComponent() {
  const pathname = usePathname();
  const currentPath = pathname.split('/').pop() || 'index';

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        item: [
          'flex',
          'relative',
          'h-full',
          'items-center',
          "data-[active=true]:after:content-['']",
          'data-[active=true]:after:absolute',
          'data-[active=true]:after:bottom-0',
          'data-[active=true]:after:left-0',
          'data-[active=true]:after:right-0',
          'data-[active=true]:after:h-[2px]',
          'data-[active=true]:after:rounded-[2px]',
          'data-[active=true]:after:bg-primary',
        ],
      }}
    >
      <NavbarContent className='sm:hidden' justify='start'>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>

      <NavbarContent className='sm:hidden pr-3' justify='center'>
        <Link href='/'>
          <NavbarBrand className=' flex gap-4'>
            <Image width={50} height={50} alt='logo' src={'/OIG2.png'} />{' '}
            <p className='font-bold text-inherit'>Flyway</p>
          </NavbarBrand>
        </Link>
      </NavbarContent>
      <NavbarBrand className='hidden sm:flex'>
        <Link href='/' className='flex gap-4 items-center'>
          <Image width={50} height={50} alt='logo' src={'/OIG2.png'} />
          <p className='font-bold text-inherit'>Flyway</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        {NAV_ITEMS.map((item, index) => (
          <NavbarItem
            key={index}
            isActive={currentPath.includes(
              item.toLowerCase().replace(/ & /g, '-and-').replace(/ /g, '-')
            )}
          >
            <Link
              color={
                currentPath.includes(
                  item.toLowerCase().replace(/ & /g, '-and-').replace(/ /g, '-')
                )
                  ? 'primary'
                  : 'foreground'
              }
              href={`/${item
                .toLowerCase()
                .replace(/ & /g, '-and-')
                .replace(/ /g, '-')}`}
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem className='hidden lg:flex'>
          <Link href='#'>Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color='primary' href='#' variant='flat'>
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {NAV_ITEMS.map((item, index) => (
          <NavbarMenuItem
            key={index}
            isActive={currentPath.includes(
              item.toLowerCase().replace(/ & /g, '-and-').replace(/ /g, '-')
            )}
          >
            <Link
              color={
                currentPath.includes(
                  item.toLowerCase().replace(/ & /g, '-and-').replace(/ /g, '-')
                )
                  ? 'primary'
                  : 'foreground'
              }
              href={`/${item
                .toLowerCase()
                .replace(/ & /g, '-and-')
                .replace(/ /g, '-')}`}
            >
              <Title>{item}</Title>
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
