import nodemailer from 'nodemailer';

import { MailAdapter, SendMailData } from './../mail-adapter';

const transport = nodemailer.createTransport({
	host: 'smtp.mailtrap.io',
	port: 2525,
	auth: {
		user: '9c69643875ea51',
		pass: 'f799bc6715e6ef',
	},
});

export class NodemailerMailAdapter implements MailAdapter {
	async sendMail({ subject, body }: SendMailData) {
		await transport.sendMail({
			from: 'Equipa Feedget <oi@feedget.com>',
			to: 'Rui costa <ram666.rc@gmail.com>',
			subject,
			html: body,
		});
	}
}
