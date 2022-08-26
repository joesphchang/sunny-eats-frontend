import React, { useState } from 'react';

function Footer() {
	return (
		<div className='footer__container'>
            <h2>Created By</h2>
			<div className='footer__creator-container'>
				<h3 className='footer__header'>Andrew Kai</h3>
				<a
					href='https://github.com/AndrewKalGit'
					className='footer__social-icons'>
					<i class='devicon-github-original colored'></i>
				</a>
				<a
					href='https://www.linkedin.com/in/andrew-kal/'
					className='footer__social-icons'>
					<i class='devicon-linkedin-plain colored'></i>
				</a>
			</div>
			<div className='footer__creator-container'>
				<h3 className='footer__header'>Joey Chang</h3>
				<a
					href='https://github.com/joesphchang'
					className='footer__social-icons'>
					<i class='devicon-github-original colored'></i>
				</a>
				<a
					href='https://www.linkedin.com/in/joesphchang/'
					className='footer__social-icons'>
					<i class='devicon-linkedin-plain colored'></i>
				</a>
			</div>
		</div>
	);
}

export default Footer;
