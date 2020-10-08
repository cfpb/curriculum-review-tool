import React from "react";

import C from "../../business.logic/constants";

export default class SvgIcon extends React.Component {

    render() {
        let classNames = "a-icon";

        if (this.props.color === "green") {
            classNames += " a-icon__green";
        }

        if (this.props.isLarge === "true") {
            classNames += " a-icon__large";
        }

        if (this.props.hasSpaceBefore === "true") {
            classNames += " a-icon__space-before";
        }

        if (this.props.hasSpaceAfter === "true") {
            classNames += " a-icon__space-after";
        }

        if (this.props.icon === C.ICON_CHECK_ROUND) {
            return (
                <span className={classNames}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1200" className="cf-icon-svg"><path d="M500 105.2c-276.1 0-500 223.9-500 500s223.9 500 500 500 500-223.9 500-500-223.9-500-500-500zm259 284.2L481.4 870.3c-8.2 14.1-22.7 23.4-39 24.8-1.4.1-2.9.2-4.3.2-14.8 0-28.9-6.6-38.4-18L244.4 690.9c-17.9-21-15.4-52.6 5.7-70.5 21-17.9 52.6-15.4 70.5 5.7.2.3.5.5.7.8l109.4 131.4 241.8-418.8c13.6-24 44.2-32.4 68.2-18.8 24 13.6 32.4 44.2 18.8 68.2l-.5.5z"/></svg>
                </span>
            );
        } else if (this.props.icon === C.ICON_CREDIT_REPORT) {
            return (
                <span className={classNames}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 651.7 1200" className="cf-icon-svg"><path d="M651.7 367.7v-24l-91.4-91.4-66.6-66.6L469 161H35c-19.3.1-34.9 15.7-35 35v817.8c.1 19.3 15.7 34.9 35 35h581.7c19.3-.1 34.9-15.7 35-35V367.7zm-60 59v562.1H60V221h359.6v134.8c.1 20 16.2 36.2 36.2 36.2h135.9v34.7z"/><path d="M279.6 802.8l-77.8-93.4c-14.1-17-39.4-19.3-56.3-5.1-17 14.1-19.3 39.4-5.1 56.3l114.5 137.5c7.6 9.1 18.9 14.4 30.7 14.4 1.1 0 2.3-.1 3.4-.2 13-1.1 24.7-8.5 31.2-19.9l204.7-354.5c11.2-19.1 4.8-43.6-14.3-54.7s-43.6-4.8-54.7 14.3c-.1.2-.2.3-.3.5l-176 304.8z"/></svg>
                </span>
            );
        } else if (this.props.icon === C.ICON_CREDIT_REPORT_ROUND) {
            return (
                <span className={classNames}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1200" className="cf-icon-svg"><path d="M409.2 723.3c-12.5-14.7-34.6-16.5-49.3-3.9-14.5 12.3-16.4 34-4.4 48.7L443.6 874c6.6 8 16.5 12.6 26.9 12.6 1 0 2 0 3-.1 11.4-1 21.6-7.5 27.3-17.4l157.7-273.2c9.6-16.8 3.7-38.2-13.1-47.7-16.6-9.5-37.8-3.8-47.5 12.7L465.3 790.7l-56.1-67.4z"/><path d="M500 105.2c-276.1 0-500 223.9-500 500s223.9 500 500 500 500-223.9 500-500-223.9-500-500-500zm71.8 165.2h1.5l176.9 170.8H571.8V270.4zm179 222.1v405.2c0 22.1-17.9 40-40 40H290.3c-22.1 0-40-17.9-40-40V310.4c0-22.1 17.9-40 40-40h235.2v186.5c0 16.9 13.7 30.5 30.6 30.6h194.7v5z"/></svg>
                </span>
            );
        } else if (this.props.icon === C.ICON_DOCUMENT) {
            return (
                <span className={classNames}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 651.7 1200" className="cf-icon-svg"><path d="M30 161c-16.5 0-30 13.5-30 30v827.8c0 16.5 13.5 30 30 30h591.7c16.5 0 30-13.5 30-30V343.7L469 161H30zm389.6 60v134.8c0 19.9 16.3 36.2 36.2 36.2h135.9V988.8H60V221h359.6z"/><path d="M123.8 768.6h394.8v50H123.8zM123.8 644h394.8v50H123.8zM123.8 519.5h394.8v50H123.8z"/><circle cx="194" cy="382.3" r="60"/></svg>
                </span>
            );
        } else if (this.props.icon === C.ICON_DOCUMENT_ROUND) {
            return (
                <span className={classNames}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1200" className="cf-icon-svg"><path d="M379.9 493.6c-.7 0-1.5 0-2.2-.1-.7 0-1.5-.1-2.2-.2s-1.5-.2-2.2-.3c-.7-.1-1.5-.2-2.2-.4-.7-.1-1.4-.3-2.2-.5l-2.1-.6c-.7-.2-1.4-.4-2.1-.7-.7-.2-1.4-.5-2.1-.8s-1.3-.6-2-.9-1.3-.6-2-1c-.6-.3-1.3-.7-1.9-1.1s-1.3-.8-1.9-1.2c-.6-.4-1.2-.8-1.8-1.3-.6-.4-1.2-.9-1.8-1.4-.6-.5-1.1-.9-1.7-1.4-.5-.5-1.1-1-1.6-1.5s-1-1.1-1.5-1.6-1-1.1-1.4-1.7c-.5-.6-.9-1.2-1.4-1.7-.4-.6-.9-1.2-1.3-1.8-.4-.6-.8-1.2-1.2-1.9-.4-.6-.7-1.3-1.1-1.9-.3-.6-.7-1.3-1-2s-.6-1.3-.9-2-.5-1.4-.8-2c-.2-.7-.5-1.4-.7-2.1l-.6-2.1c-.2-.7-.3-1.4-.5-2.2-.1-.7-.3-1.4-.4-2.2-.1-.7-.2-1.5-.3-2.2-.1-.7-.1-1.5-.2-2.2 0-.7-.1-1.5-.1-2.2s0-1.5.1-2.2c0-.7.1-1.5.2-2.2s.2-1.5.3-2.2c.1-.7.2-1.4.4-2.2.2-.7.3-1.4.5-2.1l.6-2.1c.2-.7.5-1.4.7-2.1s.5-1.4.8-2.1.6-1.4.9-2c.3-.7.7-1.3 1-2 .3-.6.7-1.3 1.1-1.9s.8-1.3 1.2-1.9c.4-.6.8-1.2 1.3-1.8.4-.6.9-1.2 1.4-1.7.5-.6 1-1.1 1.4-1.7.5-.5 1-1.1 1.5-1.6s1.1-1 1.6-1.5 1.1-1 1.7-1.4c.6-.5 1.2-.9 1.8-1.4.6-.4 1.2-.9 1.8-1.3.6-.4 1.2-.8 1.9-1.2.6-.4 1.3-.7 1.9-1.1.6-.3 1.3-.7 2-1s1.3-.6 2-.9 1.4-.5 2.1-.8c.7-.2 1.4-.5 2.1-.7l2.1-.6c.7-.2 1.4-.3 2.2-.5.7-.1 1.5-.3 2.2-.4s1.5-.2 2.2-.3c.7-.1 1.5-.1 2.2-.2 1.5-.1 3-.1 4.4 0 .7 0 1.5.1 2.2.2s1.5.2 2.2.3c.7.1 1.5.2 2.2.4.7.1 1.4.3 2.2.5l2.1.6c.7.2 1.4.5 2.1.7s1.4.5 2 .8c.7.3 1.4.6 2 .9.7.3 1.3.6 2 1 .6.3 1.3.7 1.9 1.1s1.2.8 1.9 1.2c.6.4 1.2.8 1.8 1.3.6.4 1.2.9 1.8 1.4.6.5 1.1 1 1.7 1.4.5.5 1.1 1 1.6 1.5s1 1.1 1.5 1.6 1 1.1 1.5 1.7.9 1.1 1.4 1.7c.4.6.9 1.2 1.3 1.8.4.6.8 1.2 1.2 1.9.4.6.7 1.3 1.1 1.9.3.6.7 1.3 1 2s.6 1.3.9 2 .5 1.4.8 2.1c.2.7.5 1.4.7 2.1l.6 2.1c.2.7.3 1.4.5 2.1.1.7.3 1.5.4 2.2s.2 1.5.3 2.2c.1.7.1 1.5.2 2.2 0 .7.1 1.5.1 2.2s0 1.5-.1 2.2c0 .7-.1 1.5-.2 2.2s-.2 1.5-.3 2.2c-.1.7-.2 1.5-.4 2.2-.1.7-.3 1.4-.5 2.2l-.6 2.1c-.2.7-.4 1.4-.7 2.1-.2.7-.5 1.4-.8 2-.3.7-.6 1.4-.9 2-.3.7-.6 1.3-1 2-.3.7-.7 1.3-1.1 1.9s-.8 1.3-1.2 1.9c-.4.6-.8 1.2-1.3 1.8-.4.6-.9 1.2-1.4 1.7-.5.6-1 1.1-1.5 1.7s-1 1.1-1.5 1.6-1.1 1-1.6 1.5-1.1 1-1.7 1.4c-.6.5-1.2.9-1.8 1.4-.6.4-1.2.9-1.8 1.3-.6.4-1.2.8-1.9 1.2-.6.4-1.3.7-1.9 1.1-.7.3-1.3.7-2 1s-1.3.6-2 .9-1.4.5-2 .8c-.7.2-1.4.5-2.1.7l-2.1.6c-.7.2-1.4.3-2.2.5-.7.1-1.5.3-2.2.4s-1.5.2-2.2.3c-.7.1-1.5.1-2.2.2-.7.1-1.5.1-2.2.1zM331.6 681.2h329.3v40H331.6z"/><circle cx="380.1" cy="448.8" r="45.2"/><path d="M331.6 782.8h329.3v40H331.6zM331.6 579.5h329.3v40H331.6z"/><path d="M500 105.2c-276.1 0-500 223.9-500 500s223.9 500 500 500 500-223.9 500-500-223.9-500-500-500zm230.8 794.5c0 11-9 20-20 20H290.3c-11 0-20-9-20-20V312.4c0-11 9-20 20-20l239.2.2v166.3c0 16.8 13.8 30.6 30.6 30.6h171.3l-.6 410.2zm.6-456.5H575.8V292.7l155.5 150.1v.4h.1z"/></svg>
                </span>
            );
        } else if (this.props.icon === C.ICON_EXCLAMATION_MARK_ROUND) {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1200" className="cf-icon-svg"><path d="M500 105.2c-276.1 0-500 223.9-500 500s223.9 500 500 500 500-223.9 500-500-223.9-500-500-500zm-49.7 234.6c0-27.6 22.4-50 50-50s50 22.4 50 50v328.6c0 27.6-22.4 50-50 50s-50-22.4-50-50V339.8zm50 582.5c-39.6 0-71.7-32.1-71.7-71.7s32.1-71.7 71.7-71.7S572 811 572 850.6s-32.1 71.7-71.7 71.7z"/></svg>
            );
        } else if (this.props.icon === C.ICON_PENCIL) {
            return (
                <span className={classNames}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 833.4 1200" className="cf-icon-svg"><path d="M233 203.1c-27.2-27.2-71.8-27.2-99 0L20.4 316.7c-27.2 27.2-27.2 71.8 0 99l89.7 89.7 212.7-212.7-89.8-89.6zM832.6 992.7l-48.6-216c-3.4-15.3-14.9-36.5-26-48.6l-1.8-1.8-121.8-121.9-110.6-110.6-165.7-165.7-54.8 54.8 400 400 21.4-21.4c5.3 6.4 11.9 18.9 13.5 25.6l21.4 95.2-60 60-95.2-21.4c-6.7-1.5-19.2-8.2-25.6-13.5l89.2-89.2-400-400-122.6 122.6 165.7 165.7 110.6 110.6 121.8 121.8 1.8 1.8c12.1 11.1 33.3 22.6 48.6 26l215.9 48.6c2.2.5 4.3.7 6.2.7 12.6.1 19.8-9.4 16.6-23.3z"/></svg>
                </span>
            );
        } else if (this.props.icon === C.ICON_PLUS_ROUND) {
            return (
                <span className={classNames}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1200" className="cf-icon-svg"><path d="M500 105.2c-276.1 0-500 223.9-500 500s223.9 500 500 500 500-223.9 500-500-223.9-500-500-500zm263.1 550.7H549.6v213.6c0 27.6-22.4 50-50 50s-50-22.4-50-50V655.9H236c-27.6 0-50-22.4-50-50s22.4-50 50-50h213.6V342.3c0-27.6 22.4-50 50-50s50 22.4 50 50v213.6h213.6c27.6 0 50 22.4 50 50s-22.5 50-50.1 50z"/></svg>
                </span>
            );
        } else if (this.props.icon === C.ICON_QUESTION_ROUND) {
            return (
                <span className={classNames}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1200" className="cf-icon-svg"><path d="M500 105.2c-276.1 0-500 223.9-500 500s223.9 500 500 500 500-223.9 500-500-223.9-500-500-500zm59.5 816.2c-6.5 15.2-18.6 27.3-33.7 33.7l-.3.1c-7.7 3.2-15.9 4.9-24.2 4.9-25.8.2-49.2-15.1-59.3-38.9-10.2-23.7-4.8-51.2 13.6-69.3 6-5.7 12.9-10.3 20.6-13.4 7.9-3.3 16.5-5 25.1-5 8.3 0 16.5 1.7 24.2 5l.2.1c7.5 3.2 14.3 7.7 20.2 13.4 18.3 18.2 23.6 45.6 13.6 69.4zm115.7-430.5c-4.1 15.2-10.1 29.9-17.7 43.7-7 12.4-15.1 24.2-24.2 35.1-8.8 10.4-17.3 20.3-25.4 29.5-.4.4-.8.8-1.2 1.3-7.6 8-14.6 15.6-20.8 22.9-6.6 7.6-12.4 15.9-17.4 24.7-5.2 9.2-9.1 19.1-11.8 29.3-2.8 10.7-4.3 23.2-4.3 37.2v2.2c0 27.4-22.4 49.8-50 49.8s-50-22.4-50-50v-2.2c0-22.7 2.6-43.8 7.6-62.9 4.9-18.6 12.1-36.4 21.6-53.2 8.2-14.3 17.7-27.8 28.5-40.3 7.1-8.3 15.1-17 23.6-26 7.3-8.3 15.1-17.3 23.1-26.8 5.2-6.3 9.8-13 13.8-20.1 3.6-6.7 6.4-13.8 8.4-21.2 1.4-5.1 3.1-14.1 3.1-28.4a80.7 80.7 0 0 0-6.2-32.5c-4.1-10.1-10.1-19.2-17.7-27-7.5-7.6-16.5-13.7-26.4-17.8-9.7-4.2-20.1-6.2-30.7-6-10.9-.2-21.7 1.9-31.7 6.2-20.5 8.5-36.7 24.8-45.2 45.3-4.3 10-6.4 20.9-6.2 31.8v1.2c0 27.6-22.4 50-50 50s-50-22.4-50-50v-1.3c0-25.5 4.7-48.8 14.3-71.2 18.5-44 53.5-79 97.4-97.6 22.4-9.7 45.8-14.4 71.3-14.4 24.2-.2 48.3 4.7 70.5 14.4 43.7 18.7 78.3 53.7 96.4 97.6 9.5 22.5 14.1 45.8 14.1 71.4 0 20.5-2.3 39.1-6.8 55.3z"/></svg>
                </span>
            );
        } else if (this.props.icon === C.ICON_SETTINGS) {
            return (
                <span className={classNames}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 834 1200" className="cf-icon-svg"><path d="M804.4 505.7L746 495.6c-3.2-.6-6.5-.6-9.7 0-7.8-30.4-19.8-59.5-35.9-86.5 2.7-1.9 5-4.2 6.9-6.9l34.2-48.5c9.5-13.5 7.8-34.1-3.9-45.7l-51.4-51.4c-11.7-11.7-32.2-13.4-45.7-3.9L592 286.9c-2.7 1.9-5 4.2-6.9 6.9-27-16-56.1-28.1-86.5-35.9.6-3.2.6-6.5 0-9.7l-10.1-58.4c-2.8-16.3-18.6-29.6-35.1-29.6h-72.7c-16.5 0-32.3 13.3-35.1 29.6l-10.1 58.4c-.6 3.2-.6 6.5 0 9.7-30.4 7.8-59.5 19.8-86.5 35.9-1.9-2.7-4.2-5-6.9-6.9l-48.5-34.2c-13.5-9.5-34.1-7.8-45.7 3.9L96.5 308c-11.7 11.7-13.4 32.2-3.9 45.7l34.2 48.5c1.9 2.7 4.2 5 6.9 6.9-16 27-28.1 56.1-35.9 86.5-3.2-.6-6.5-.6-9.7 0l-58.4 10.1C13.3 508.5 0 524.3 0 540.8v72.7c0 16.5 13.3 32.3 29.6 35.1L88 658.8c3.2.6 6.5.6 9.7 0 7.8 30.4 19.8 59.5 35.9 86.5-2.7 1.9-5 4.2-6.9 6.9l-34.2 48.5c-9.5 13.5-7.8 34.1 3.9 45.7l51.4 51.4c11.7 11.7 32.2 13.4 45.7 3.9l48.5-34.2c2.7-1.9 5-4.2 6.9-6.9 27 16 56.1 28.1 86.5 35.9-.6 3.2-.6 6.5 0 9.7l10.1 58.4c2.8 16.3 18.6 29.6 35.1 29.6h72.7c16.5 0 32.3-13.3 35.1-29.6l10.1-58.4c.6-3.2.6-6.5 0-9.7 30.4-7.8 59.5-19.8 86.5-35.9 1.9 2.7 4.2 5 6.9 6.9l48.5 34.2c13.5 9.5 34.1 7.8 45.7-3.9l51.4-51.4c11.7-11.7 13.4-32.2 3.9-45.7l-34.2-48.5c-1.9-2.7-4.2-5-6.9-6.9 16-27 28.1-56.1 35.9-86.5 3.2.6 6.5.6 9.7 0l58.4-10.1c16.3-2.8 29.6-18.6 29.6-35.1v-72.7c.1-16.6-13.2-32.4-29.5-35.2zM417 719.2c-78.4 0-142-63.6-142-142s63.6-142 142-142 142 63.6 142 142-63.6 142-142 142z"/></svg>
                </span>
            );
        } else if (this.props.icon === C.ICON_SETTINGS_ROUND) {
            return (
                <span className={classNames}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1200" className="cf-icon-svg"><path d="M500 105.2c-276.1 0-500 223.9-500 500s223.9 500 500 500 500-223.9 500-500-223.9-500-500-500zm353.1 537.2c0 11-8.9 21.5-19.7 23.4l-60.1 10.4c-1.1.2-2.1.3-3.2.3-6.5 24.9-16.4 48.8-29.5 71 .8.8 1.5 1.6 2.1 2.5l35.2 49.8c6.3 9 5.2 22.7-2.6 30.5l-51.2 51.2c-7.8 7.8-21.5 9-30.5 2.6l-49.8-35.2c-.9-.6-1.7-1.3-2.5-2.1-22.2 13.1-46.1 23-71 29.5 0 1.1-.1 2.1-.3 3.2l-10.4 60.1c-1.9 10.8-12.4 19.7-23.4 19.7h-72.4c-11 0-21.5-8.9-23.4-19.7L430 879.5c-.2-1.1-.3-2.1-.3-3.2-24.9-6.5-48.8-16.4-71-29.5-.8.8-1.6 1.5-2.5 2.1l-49.9 35.2c-9 6.3-22.7 5.2-30.5-2.6l-51.2-51.2c-7.8-7.8-9-21.5-2.6-30.5l35.2-49.8c.6-.9 1.3-1.7 2.1-2.5-13.1-22.2-23-46.1-29.4-71-1.1 0-2.1-.1-3.2-.3l-60.1-10.4c-10.8-1.9-19.7-12.4-19.7-23.4V570c0-11 8.9-21.5 19.7-23.4l60.1-10.4c1.1-.2 2.2-.2 3.2-.2 6.5-24.9 16.4-48.8 29.5-71-.8-.8-1.5-1.6-2.1-2.5l-35.2-49.9c-6.3-9-5.2-22.7 2.6-30.5l51.1-51.2c7.8-7.8 21.5-9 30.5-2.6l49.9 35.2c.9.6 1.7 1.3 2.5 2.1 22.2-13.1 46.1-23 71-29.5 0-1.1.1-2.1.2-3.2l10.4-60.1c1.9-10.8 12.4-19.7 23.4-19.7h72.4c11 0 21.5 8.9 23.4 19.7L570 333c.2 1.1.3 2.1.3 3.2 24.9 6.5 48.8 16.4 71 29.5.8-.8 1.6-1.5 2.5-2.1l49.8-35.2c9-6.3 22.7-5.2 30.5 2.6l51.2 51.2c7.8 7.8 9 21.5 2.6 30.5l-35.2 49.8c-.6.9-1.3 1.7-2.1 2.5 13 22.2 22.9 46.1 29.4 71 1.1 0 2.1.1 3.2.3l60.1 10.4c10.9 1.8 19.8 12.3 19.8 23.3v72.4z"/><circle cx="500" cy="606.2" r="120.2"/></svg>
                </span>
            );
        } else if (this.props.icon === C.ICON_STAR) {
            return (
                <span className={classNames}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 969.7 1200" className="cf-icon-svg"><path d="M843.8 592.5l94.6-87.5c52.5-48.5 37.3-95.1-33.7-103.6l-128-15.2-129-15.3-81.5-176.6-27-58.5c-30-64.9-79-64.9-108.9 0l-27 58.5L322 371l-129.1 15.3-128 15.2c-71 8.4-86.1 55-33.6 103.6l47.3 43.7 47.3 43.7 95.4 88.3L196 808.2l-12.6 63.2-12.6 63.2c-13.9 70.1 25.7 98.9 88.1 64l225.9-126.4 225.9 126.4c62.4 34.9 102 6.1 88.1-64l-12.6-63.2-37.9-190.7 95.5-88.2z"/></svg>
                </span>
            );
        } else if (this.props.icon === C.ICON_STAR_ROUND) {
            return (
                <span className={classNames}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1200" className="cf-icon-svg"><path d="M500 105.2c-276.1 0-500 223.9-500 500s223.9 500 500 500 500-223.9 500-500-223.9-500-500-500zm329.9 449.4l-68.7 63.5-69.3 64.1 27.5 138.5 9.1 45.9c10.1 50.9-18.7 71.9-64 46.5l-164.1-91.8-164.1 91.8c-45.3 25.4-74.1 4.4-64-46.5l9.1-45.9 9.1-45.9 18.4-92.6-69.3-64.1-34.4-31.8-34.4-31.8c-38.1-35.3-27.1-69.1 24.4-75.2l93-11 93.8-11.1L441.3 329l19.6-42.5c21.8-47.2 57.4-47.2 79.1 0l19.6 42.5 59.2 128.2 93.8 11.1 93 11c51.4 6.2 62.4 40.1 24.3 75.3z"/></svg>
                </span>
            );
        } else if (this.props.icon === C.ICON_X_ROUND) {
            return (
                <span className={classNames}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1200" className="cf-icon-svg"><path d="M500 105.2c-276.1 0-500 223.9-500 500s223.9 500 500 500 500-223.9 500-500-223.9-500-500-500zm261.8 692.2c19.4 19.6 19.3 51.3-.3 70.7-19.5 19.3-50.9 19.3-70.4 0L499.6 676.6 308 868.1c-19.6 19.4-51.3 19.3-70.7-.3-19.3-19.5-19.3-50.9 0-70.4l191.6-191.5-191.6-191.6c-19.3-19.8-18.9-51.4.9-70.7 19.4-18.9 50.4-18.9 69.8 0l191.6 191.5 191.5-191.5c19.6-19.4 51.3-19.3 70.7.3 19.3 19.5 19.3 50.9 0 70.4L570.3 605.9l191.5 191.5z"/></svg>
                </span>
            );
        } else if (this.props.icon === C.ICON_UPDATING) {
            return (
                <span className={classNames}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 952.7 1200" class="cf-icon-svg cf-icon-svg__updating"><path d="M952.5 592.6c-.9-35.3-29.7-63.4-65-63.4h-1.6c-35.9.9-64.3 30.7-63.4 66.6.1 2.8.1 5.7.1 8.5s0 5.6-.1 8.3c-.9 35.9 27.5 65.7 63.4 66.6h1.6c35.3 0 64.1-28.1 65-63.4.1-3.8.1-7.6.1-11.5s0-7.8-.1-11.7zM873.1 730.4c-32-16.2-71.1-3.4-87.4 28.6-4.4 8.7-9.3 17.3-14.4 25.6-19.1 30.4-10 70.5 20.4 89.6 30.4 19.1 70.5 10 89.6-20.4.1-.2.3-.4.4-.7 7.1-11.5 13.8-23.4 19.9-35.4 16.3-31.9 3.5-71.1-28.5-87.3zM668.2 890.5c-11.7 7.6-23.9 14.6-36.5 20.7-32.6 15-46.9 53.6-31.9 86.2s53.6 46.9 86.2 31.9c1-.4 1.9-.9 2.9-1.4 17.4-8.5 34.2-18.1 50.4-28.6 29.8-20.1 37.6-60.5 17.5-90.2-19.7-29.1-58.9-37.3-88.6-18.6zM486.6 946.2h-.9c-14 .2-28-.5-41.9-2-35.7-3.7-67.6 22.3-71.3 58-3.6 35.4 21.8 67.1 57.1 71.2 17 1.9 34.1 2.8 51.3 2.8h6.6c35.9-.2 64.8-29.5 64.6-65.4-.3-35.9-29.6-64.8-65.5-64.6zM655.2 310.3l.6.4c30.8 18.5 70.7 8.6 89.2-22.2 18.5-30.8 8.6-70.7-22.2-89.2l-1.1-.7c-30.8-18.4-70.7-8.2-89.1 22.6-18.4 30.9-8.2 70.7 22.6 89.1zM490 132.6h-2.3c-35.9-.3-65.2 28.6-65.5 64.5s28.6 65.2 64.5 65.5h2.1c35.9.3 65.3-28.5 65.6-64.4.3-35.8-28.5-65.2-64.4-65.6zM778.5 436.4c17.7 31.2 57.4 42.2 88.6 24.4s42.2-57.4 24.4-88.6l-.5-.9c-17.1-31.6-56.6-43.3-88.1-26.2-31.6 17.1-43.3 56.6-26.2 88.1.4.7.8 1.5 1.3 2.2l.5 1zM298.8 893c-14.3-9-27.8-19-40.6-30-27.4-23.2-68.4-19.7-91.6 7.7-22.9 27.1-19.8 67.7 7 91 17.6 15.1 36.3 28.9 55.9 41.3 30.4 19.1 70.5 10 89.6-20.4 19.2-30.3 10.1-70.5-20.3-89.6zM168.8 742.8c-6.8-15.4-12.5-31.2-17-47.4-10.2-34.4-46.4-54.1-80.8-43.9-33.6 9.9-53.2 44.7-44.5 78.6 6.2 22.3 14 44.2 23.4 65.4 14.6 32.8 53 47.6 85.8 33.1 32.8-14.6 47.6-53 33.1-85.8zM275.9 180.2H65c-35.9 0-65 29.1-65 65s29.1 65 65 65h47.2c-47.2 59.2-79.4 128.9-94 203.1-6.9 35.2 16.1 69.4 51.3 76.3s69.4-16.1 76.3-51.3C156 486.1 178.3 437 211 395v61.3c0 35.9 29.1 65 65 65s65-29.1 65-65v-211c0-36-29.1-65.1-65.1-65.1.1 0 .1 0 0 0z"></path></svg>
                </span>
            );
        }
        else {
            return null;
        }
    }
}
