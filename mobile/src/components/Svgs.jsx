import React from 'react'
import Svg, { Rect, Mask, G, Path, Circle, Defs, ClipPath, Ellipse, Line } from 'react-native-svg'

export function RedCard({ width }) {
    return (
        <Svg width={width} height="186" viewBox="0 0 358 186" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Rect width="358" height="178" rx="27.9688" fill="#FF565E" />
            <Mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="358" height="178">
                <Rect width="358" height="178" rx="27.9688" fill="white" />
            </Mask>
            <G mask="url(#mask0)">
                <Rect x="-33.5625" y="100.867" width="125.3" height="108.778" rx="27.9688" fill="#FF464F" />
                <Rect x="217.038" y="100.867" width="125.3" height="108.778" rx="27.9688" fill="#FF464F" />
                <Rect x="116" y="45" width="76.075" height="65.2667" rx="32.6333" fill="#FF464F" />
                <Rect x="337.862" y="-7.91113" width="125.3" height="108.778" rx="27.9688" fill="#FF464F" />
            </G>
        </Svg>
    )
}

export function YellowCard() {
    return (
        <Svg width="168" height="210" viewBox="0 0 168 210" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Rect width="168" height="209.79" rx="25" fill="#FFC542" />
            <Mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="168" height="210">
                <Rect width="168" height="209.79" rx="25" fill="white" />
            </Mask>
            <G mask="url(#mask0)">
                <Rect x="-84" y="33" width="125.3" height="108.778" rx="27.9688" fill="#FFBC25" />
                <Rect x="86" y="152" width="125.3" height="108.778" rx="27.9688" fill="#FFBC25" />
            </G>
        </Svg>
    )
}

export function GreenCard() {
    return (
        <Svg width="168" height="210" viewBox="0 0 168 210" fill="none" xmlns="http://www.w3.org/2000/svg">
            <G clipPath="url(#clip0)">
                <Rect width="168" height="209.79" rx="25" fill="#3ED598" />
                <Mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="168" height="210">
                    <Rect width="168" height="209.79" rx="25" fill="white" />
                </Mask>
                <G mask="url(#mask0)">
                    <Rect x="-51" y="147" width="125.3" height="108.778"
                        rx="27.9688" fill="#41AD81" fillOpacity="0.8" />
                </G>
                <Rect x="132" y="50" width="76.075" height="65.2667" rx="32.6333" fill="#41AD81" fillOpacity="0.8" />
            </G>
            <Defs>
                <ClipPath id="clip0">
                    <Rect width="168" height="210" fill="white" />
                </ClipPath>
            </Defs>
        </Svg>

    )
}
