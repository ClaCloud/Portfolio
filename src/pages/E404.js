import { useEffect } from 'react';
import $ from 'jquery';

export default function E404() {

  useEffect(() => {
    $('#svg404').addClass('animation');
    setTimeout(function () {
      $('#svg404').removeClass('animation').addClass('ready');
    }, 1100);
  }, []);

  return (
    <div className="grid-vcenter">
      <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="460" height="230" viewBox="0 0 460 230" id="svg404">
        <defs>
          <filter id="_1x1" x="0" y="0" width="50" height="50" filterUnits="userSpaceOnUse">
            <feOffset dx="10" dy="10" input="SourceAlpha" />
            <feGaussianBlur result="blur" />
            <feFlood />
            <feComposite operator="in" in2="blur" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter id="_1x2" x="0" y="45" width="50" height="50" filterUnits="userSpaceOnUse">
            <feOffset dx="10" dy="10" input="SourceAlpha" />
            <feGaussianBlur result="blur-2" />
            <feFlood />
            <feComposite operator="in" in2="blur-2" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter id="_1x3" x="0" y="90" width="50" height="50" filterUnits="userSpaceOnUse">
            <feOffset dx="10" dy="10" input="SourceAlpha" />
            <feGaussianBlur result="blur-3" />
            <feFlood />
            <feComposite operator="in" in2="blur-3" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter id="_2x3" x="45" y="90" width="50" height="50" filterUnits="userSpaceOnUse">
            <feOffset dx="10" dy="10" input="SourceAlpha" />
            <feGaussianBlur result="blur-4" />
            <feFlood />
            <feComposite operator="in" in2="blur-4" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter id="_3x1" x="90" y="0" width="50" height="50" filterUnits="userSpaceOnUse">
            <feOffset dx="10" dy="10" input="SourceAlpha" />
            <feGaussianBlur result="blur-5" />
            <feFlood />
            <feComposite operator="in" in2="blur-5" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter id="_3x2" x="90" y="45" width="50" height="50" filterUnits="userSpaceOnUse">
            <feOffset dx="10" dy="10" input="SourceAlpha" />
            <feGaussianBlur result="blur-6" />
            <feFlood />
            <feComposite operator="in" in2="blur-6" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter id="_3x3" x="90" y="90" width="50" height="50" filterUnits="userSpaceOnUse">
            <feOffset dx="10" dy="10" input="SourceAlpha" />
            <feGaussianBlur result="blur-7" />
            <feFlood />
            <feComposite operator="in" in2="blur-7" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter id="_3x4" x="90" y="135" width="50" height="50" filterUnits="userSpaceOnUse">
            <feOffset dx="10" dy="10" input="SourceAlpha" />
            <feGaussianBlur result="blur-8" />
            <feFlood />
            <feComposite operator="in" in2="blur-8" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter id="_3x5" x="90" y="180" width="50" height="50" filterUnits="userSpaceOnUse">
            <feOffset dx="10" dy="10" input="SourceAlpha" />
            <feGaussianBlur result="blur-9" />
            <feFlood />
            <feComposite operator="in" in2="blur-9" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter id="_4x1" x="160" y="0" width="50" height="50" filterUnits="userSpaceOnUse">
            <feOffset dx="10" dy="10" input="SourceAlpha" />
            <feGaussianBlur result="blur-10" />
            <feFlood />
            <feComposite operator="in" in2="blur-10" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter id="_4x2" x="160" y="45" width="50" height="50" filterUnits="userSpaceOnUse">
            <feOffset dx="10" dy="10" input="SourceAlpha" />
            <feGaussianBlur result="blur-11" />
            <feFlood />
            <feComposite operator="in" in2="blur-11" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter id="_4x3" x="160" y="90" width="50" height="50" filterUnits="userSpaceOnUse">
            <feOffset dx="10" dy="10" input="SourceAlpha" />
            <feGaussianBlur result="blur-12" />
            <feFlood />
            <feComposite operator="in" in2="blur-12" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter id="_4x4" x="160" y="135" width="50" height="50" filterUnits="userSpaceOnUse">
            <feOffset dx="10" dy="10" input="SourceAlpha" />
            <feGaussianBlur result="blur-13" />
            <feFlood />
            <feComposite operator="in" in2="blur-13" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter id="_4x5" x="160" y="180" width="50" height="50" filterUnits="userSpaceOnUse">
            <feOffset dx="10" dy="10" input="SourceAlpha" />
            <feGaussianBlur result="blur-14" />
            <feFlood />
            <feComposite operator="in" in2="blur-14" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter id="_5x1" x="205" y="0" width="50" height="50" filterUnits="userSpaceOnUse">
            <feOffset dx="10" dy="10" input="SourceAlpha" />
            <feGaussianBlur result="blur-15" />
            <feFlood />
            <feComposite operator="in" in2="blur-15" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter id="_5x5" x="205" y="180" width="50" height="50" filterUnits="userSpaceOnUse">
            <feOffset dx="10" dy="10" input="SourceAlpha" />
            <feGaussianBlur result="blur-16" />
            <feFlood />
            <feComposite operator="in" in2="blur-16" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter id="_6x1" x="250" y="0" width="50" height="50" filterUnits="userSpaceOnUse">
            <feOffset dx="10" dy="10" input="SourceAlpha" />
            <feGaussianBlur result="blur-17" />
            <feFlood />
            <feComposite operator="in" in2="blur-17" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter id="_6x2" x="250" y="45" width="50" height="50" filterUnits="userSpaceOnUse">
            <feOffset dx="10" dy="10" input="SourceAlpha" />
            <feGaussianBlur result="blur-18" />
            <feFlood />
            <feComposite operator="in" in2="blur-18" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter id="_6x3" x="250" y="90" width="50" height="50" filterUnits="userSpaceOnUse">
            <feOffset dx="10" dy="10" input="SourceAlpha" />
            <feGaussianBlur result="blur-19" />
            <feFlood />
            <feComposite operator="in" in2="blur-19" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter id="_6x4" x="250" y="135" width="50" height="50" filterUnits="userSpaceOnUse">
            <feOffset dx="10" dy="10" input="SourceAlpha" />
            <feGaussianBlur result="blur-20" />
            <feFlood />
            <feComposite operator="in" in2="blur-20" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter id="_6x5" x="250" y="180" width="50" height="50" filterUnits="userSpaceOnUse">
            <feOffset dx="10" dy="10" input="SourceAlpha" />
            <feGaussianBlur result="blur-21" />
            <feFlood />
            <feComposite operator="in" in2="blur-21" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter id="_7x1" x="320" y="0" width="50" height="50" filterUnits="userSpaceOnUse">
            <feOffset dx="10" dy="10" input="SourceAlpha" />
            <feGaussianBlur result="blur-22" />
            <feFlood />
            <feComposite operator="in" in2="blur-22" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter id="_7x2" x="320" y="45" width="50" height="50" filterUnits="userSpaceOnUse">
            <feOffset dx="10" dy="10" input="SourceAlpha" />
            <feGaussianBlur result="blur-23" />
            <feFlood />
            <feComposite operator="in" in2="blur-23" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter id="_7x3" x="320" y="90" width="50" height="50" filterUnits="userSpaceOnUse">
            <feOffset dx="10" dy="10" input="SourceAlpha" />
            <feGaussianBlur result="blur-24" />
            <feFlood />
            <feComposite operator="in" in2="blur-24" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter id="_8x3" x="365" y="90" width="50" height="50" filterUnits="userSpaceOnUse">
            <feOffset dx="10" dy="10" input="SourceAlpha" />
            <feGaussianBlur result="blur-25" />
            <feFlood />
            <feComposite operator="in" in2="blur-25" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter id="_9x1" x="410" y="0" width="50" height="50" filterUnits="userSpaceOnUse">
            <feOffset dx="10" dy="10" input="SourceAlpha" />
            <feGaussianBlur result="blur-26" />
            <feFlood />
            <feComposite operator="in" in2="blur-26" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter id="_9x2" x="410" y="45" width="50" height="50" filterUnits="userSpaceOnUse">
            <feOffset dx="10" dy="10" input="SourceAlpha" />
            <feGaussianBlur result="blur-27" />
            <feFlood />
            <feComposite operator="in" in2="blur-27" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter id="_9x3" x="410" y="90" width="50" height="50" filterUnits="userSpaceOnUse">
            <feOffset dx="10" dy="10" input="SourceAlpha" />
            <feGaussianBlur result="blur-28" />
            <feFlood />
            <feComposite operator="in" in2="blur-28" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter id="_9x4" x="410" y="135" width="50" height="50" filterUnits="userSpaceOnUse">
            <feOffset dx="10" dy="10" input="SourceAlpha" />
            <feGaussianBlur result="blur-29" />
            <feFlood />
            <feComposite operator="in" in2="blur-29" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter id="_9x5" x="410" y="180" width="50" height="50" filterUnits="userSpaceOnUse">
            <feOffset dx="10" dy="10" input="SourceAlpha" />
            <feGaussianBlur result="blur-30" />
            <feFlood />
            <feComposite operator="in" in2="blur-30" />
            <feComposite in="SourceGraphic" />
          </filter>
        </defs>
        <g id="_404" data-name="404" transform="translate(-735 -430)">
          <g transform="matrix(1, 0, 0, 1, 735, 430)" filter="url(#_1x1)">
            <rect id="_1x1-2" data-name="1x1" width="40" height="40" fill="#fff" />
          </g>
          <g transform="matrix(1, 0, 0, 1, 735, 430)" filter="url(#_1x2)">
            <rect id="_1x2-2" data-name="1x2" width="40" height="40" transform="translate(0 45)" fill="#fff" />
          </g>
          <g transform="matrix(1, 0, 0, 1, 735, 430)" filter="url(#_1x3)">
            <rect id="_1x3-2" data-name="1x3" width="40" height="40" transform="translate(0 90)" fill="#fff" />
          </g>
          <g transform="matrix(1, 0, 0, 1, 735, 430)" filter="url(#_2x3)">
            <rect id="_2x3-2" data-name="2x3" width="40" height="40" transform="translate(45 90)" fill="#fff" />
          </g>
          <g transform="matrix(1, 0, 0, 1, 735, 430)" filter="url(#_3x1)">
            <rect id="_3x1-2" data-name="3x1" width="40" height="40" transform="translate(90)" fill="#fff" />
          </g>
          <g transform="matrix(1, 0, 0, 1, 735, 430)" filter="url(#_3x2)">
            <rect id="_3x2-2" data-name="3x2" width="40" height="40" transform="translate(90 45)" fill="#fff" />
          </g>
          <g transform="matrix(1, 0, 0, 1, 735, 430)" filter="url(#_3x3)">
            <rect id="_3x3-2" data-name="3x3" width="40" height="40" transform="translate(90 90)" fill="#fff" />
          </g>
          <g transform="matrix(1, 0, 0, 1, 735, 430)" filter="url(#_3x4)">
            <rect id="_3x4-2" data-name="3x4" width="40" height="40" transform="translate(90 135)" fill="#fff" />
          </g>
          <g transform="matrix(1, 0, 0, 1, 735, 430)" filter="url(#_3x5)">
            <rect id="_3x5-2" data-name="3x5" width="40" height="40" transform="translate(90 180)" fill="#fff" />
          </g>
          <g transform="matrix(1, 0, 0, 1, 735, 430)" filter="url(#_4x1)">
            <rect id="_4x1-2" data-name="4x1" width="40" height="40" transform="translate(160)" fill="#fff" />
          </g>
          <g transform="matrix(1, 0, 0, 1, 735, 430)" filter="url(#_4x2)">
            <rect id="_4x2-2" data-name="4x2" width="40" height="40" transform="translate(160 45)" fill="#fff" />
          </g>
          <g transform="matrix(1, 0, 0, 1, 735, 430)" filter="url(#_4x3)">
            <rect id="_4x3-2" data-name="4x3" width="40" height="40" transform="translate(160 90)" fill="#fff" />
          </g>
          <g transform="matrix(1, 0, 0, 1, 735, 430)" filter="url(#_4x4)">
            <rect id="_4x4-2" data-name="4x4" width="40" height="40" transform="translate(160 135)" fill="#fff" />
          </g>
          <g transform="matrix(1, 0, 0, 1, 735, 430)" filter="url(#_4x5)">
            <rect id="_4x5-2" data-name="4x5" width="40" height="40" transform="translate(160 180)" fill="#fff" />
          </g>
          <g transform="matrix(1, 0, 0, 1, 735, 430)" filter="url(#_5x1)">
            <rect id="_5x1-2" data-name="5x1" width="40" height="40" transform="translate(205)" fill="#fff" />
          </g>
          <g transform="matrix(1, 0, 0, 1, 735, 430)" filter="url(#_5x5)">
            <rect id="_5x5-2" data-name="5x5" width="40" height="40" transform="translate(205 180)" fill="#fff" />
          </g>
          <g transform="matrix(1, 0, 0, 1, 735, 430)" filter="url(#_6x1)">
            <rect id="_6x1-2" data-name="6x1" width="40" height="40" transform="translate(250)" fill="#fff" />
          </g>
          <g transform="matrix(1, 0, 0, 1, 735, 430)" filter="url(#_6x2)">
            <rect id="_6x2-2" data-name="6x2" width="40" height="40" transform="translate(250 45)" fill="#fff" />
          </g>
          <g transform="matrix(1, 0, 0, 1, 735, 430)" filter="url(#_6x3)">
            <rect id="_6x3-2" data-name="6x3" width="40" height="40" transform="translate(250 90)" fill="#fff" />
          </g>
          <g transform="matrix(1, 0, 0, 1, 735, 430)" filter="url(#_6x4)">
            <rect id="_6x4-2" data-name="6x4" width="40" height="40" transform="translate(250 135)" fill="#fff" />
          </g>
          <g transform="matrix(1, 0, 0, 1, 735, 430)" filter="url(#_6x5)">
            <rect id="_6x5-2" data-name="6x5" width="40" height="40" transform="translate(250 180)" fill="#fff" />
          </g>
          <g transform="matrix(1, 0, 0, 1, 735, 430)" filter="url(#_7x1)">
            <rect id="_7x1-2" data-name="7x1" width="40" height="40" transform="translate(320)" fill="#fff" />
          </g>
          <g transform="matrix(1, 0, 0, 1, 735, 430)" filter="url(#_7x2)">
            <rect id="_7x2-2" data-name="7x2" width="40" height="40" transform="translate(320 45)" fill="#fff" />
          </g>
          <g transform="matrix(1, 0, 0, 1, 735, 430)" filter="url(#_7x3)">
            <rect id="_7x3-2" data-name="7x3" width="40" height="40" transform="translate(320 90)" fill="#fff" />
          </g>
          <g transform="matrix(1, 0, 0, 1, 735, 430)" filter="url(#_8x3)">
            <rect id="_8x3-2" data-name="8x3" width="40" height="40" transform="translate(365 90)" fill="#fff" />
          </g>
          <g transform="matrix(1, 0, 0, 1, 735, 430)" filter="url(#_9x1)">
            <rect id="_9x1-2" data-name="9x1" width="40" height="40" transform="translate(410)" fill="#fff" />
          </g>
          <g transform="matrix(1, 0, 0, 1, 735, 430)" filter="url(#_9x2)">
            <rect id="_9x2-2" data-name="9x2" width="40" height="40" transform="translate(410 45)" fill="#fff" />
          </g>
          <g transform="matrix(1, 0, 0, 1, 735, 430)" filter="url(#_9x3)">
            <rect id="_9x3-2" data-name="9x3" width="40" height="40" transform="translate(410 90)" fill="#fff" />
          </g>
          <g transform="matrix(1, 0, 0, 1, 735, 430)" filter="url(#_9x4)">
            <rect id="_9x4-2" data-name="9x4" width="40" height="40" transform="translate(410 135)" fill="#fff" />
          </g>
          <g transform="matrix(1, 0, 0, 1, 735, 430)" filter="url(#_9x5)">
            <rect id="_9x5-2" data-name="9x5" width="40" height="40" transform="translate(410 180)" fill="#fff" />
          </g>
        </g>
      </svg>
      <h2 className="_404">NOT FOUND</h2>
    </div>
  );
};