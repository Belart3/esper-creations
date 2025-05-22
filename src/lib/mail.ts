import * as handlebars from "handlebars"
import nodemailer from "nodemailer"
import { reportTemplate } from "./templates/report";
import { bookingTemplate } from "./templates/booking";


export async function sendMail ({
    to, 
    name, 
    subject , 
    body
}: {
    to: string,
    name: string,
    subject: string,
    body: string,
}) {
    const {SMTP_EMAIL, SMTP_PASSWORD} = process.env;

    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: SMTP_EMAIL,
            pass: SMTP_PASSWORD,
        }
    })
    try{
        const testResult = await transport.verify();
        console.log(testResult);
    }catch(error){
        console.log(error)
        return;
    }

    try{
        const sendResult = await transport.sendMail({
            from: SMTP_EMAIL, 
            to,
            subject,
            html: body 
        })
        console.log(sendResult);
    }catch(error) {
        console.log(error)
    }

}

export function compileReportTemplate (fullName: string, email: string, phone: string ) {
    const template = handlebars.compile(reportTemplate)
    const htmlBody = template({
        fullName: fullName,
        email: email,
        phone: phone
    })
    return htmlBody;
}

export async function sendBookingMail ({
    to, 
    name, 
    subject , 
    body
}: {
    to: string,
    name: string,
    subject: string,
    body: string,
}) {
    const {SMTP_EMAIL, SMTP_PASSWORD} = process.env;

    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: SMTP_EMAIL,
            pass: SMTP_PASSWORD,
        }
    })
    try{
        const testResult = await transport.verify();
        console.log(testResult);
    }catch(error){
        console.log(error)
        return;
    }

    try{
        const sendResult = await transport.sendMail({
            from: SMTP_EMAIL, 
            to,
            subject,
            html: body 
        })
        console.log(sendResult);
    }catch(error) {
        console.log(error)
    }

}

export function compileBookingTemplate (name: string, email: string, phone: string, service: string, issue: string ) {
    const template = handlebars.compile(bookingTemplate)
    const htmlBody = template({
        name: name,
        email: email,
        phone: phone,
        service: service,
        issue: issue,
    })
    return htmlBody;
}