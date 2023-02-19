import React from "react";
import logo from "../bootstrap/images/PNG.png";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { Logout, auth } from "../functions";
import { useAuthState } from "react-firebase-hooks/auth";
import Script from 'next/script';


export const Navbar = () => {
	const [user, loading] = useAuthState(auth);

	return (
		<>
    <Head>
				<title>Create Next App</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				{/* <link rel="icon" href="/favicon.ico" />
				 */}

				<meta charset="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no, minimum-scale=1, maximum-scale=1, user-scalable=no"
				/>

				<link
					rel="stylesheet"
					href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
					integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
					crossOrigin="anonymous"
				/>
				<title>SPOORTHY</title>
				{/* <!-- <link rel="icon" type="image" href="./images/website-favicon.png" sizes="192x192" /> --> */}

				<link
					href="https://unpkg.com/aos@2.3.1/dist/aos.css"
					rel="stylesheet"
				/>
			</Head>
            <Script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
  integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
  crossOrigin="anonymous" async></Script>
<Script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
  integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
  crossOrigin="anonymous" async></Script>
<Script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
  integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
  crossOrigin="anonymous" async></Script>
    <div className="container-fluid menu">
        <nav className="navbar navbar-expand-lg my-navbar">
            <Link className="navbar-brand " href="/"><Image src={logo} height="100" width='150' alt="" loading="lazy" /></Link>
            <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" href='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/about">About us</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/events" className="nav-link">Events</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/gallery" className="nav-link">Gallery</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/donate" className="nav-link">Donate</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/volunteer" className="nav-link">Volunteer</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/contact" className="nav-link">Contact Us</Link>
                    </li>
					{user ? (
								<li className="nav-item">
									<button
										onClick={() =>
											Logout()
										}
										className="nav-link"
									>
										Logout
									</button>
								</li>
							) : (
								<></>
							)}
                </ul>
            </div>
        </nav>
</div>
</>
	);
};
