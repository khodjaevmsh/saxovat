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

export function YellowCard({ width }) {
    return (
        <Svg width={width} height="210" viewBox="0 0 168 210" fill="none" xmlns="http://www.w3.org/2000/svg">
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

export function GreenCard({ width }) {
    return (
        <Svg width={width} height="210" viewBox="0 0 168 210" fill="none" xmlns="http://www.w3.org/2000/svg">
            <G clipPath="url(#clip0)">
                <Rect width="168" height="209.79" rx="25" fill="#3ED598" />
                <Mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="168" height="210">
                    <Rect width="168" height="209.79" rx="25" fill="white" />
                </Mask>
                <G mask="url(#mask0)">
                    <Rect x="-51" y="147" width="125.3" height="108.778"
                        rx="27.9688" fill="#41AD81" fillOpacity="0.8" />
                </G>
                <Rect x="132" y="50" width="76.075" height="65.2667" rx="32.6333"
                    fill="#41AD81" fillOpacity="0.8" />
            </G>
            <Defs>
                <ClipPath id="clip0">
                    <Rect width="168" height="210" fill="white" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export function Payme({ width }) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={width} height="35" viewBox="0 0 35 35" fill="none">
            <G clipPath="url(#clip0)">
                <Path fillRule="evenodd" clipRule="evenodd" d="M33.0014 25.6931C33.5073 26.4176 33.5583 27.5595 33.021 28.4446C32.5416 29.2353 29.6702 32.2688 28.736 33.2433C27.9265 34.0899 26.8329 34.9372 25.7569 34.9372H3.22767C0.183073 34.9372 -0.000244141 33.9049 -0.000244141 31.5701V22.1005C-0.000244141 19.716 0.702783 19.0273 2.78228 19.0273H25.7569C26.8329 19.0273 27.7904 19.5769 28.8903 20.6949C29.8233 21.6442 32.6134 25.136 33.0014 25.6931ZM28.1936 27.7245H21.8354C21.8732 29.4071 22.6846 30.3155 24.1165 30.3155C24.9896 30.3155 25.5074 29.9384 25.9578 29.2C26.1544 28.879 26.5557 28.8966 26.5557 28.8966H28.1929C28.4607 28.8966 28.5791 29.1578 28.5325 29.2831C27.8351 31.1584 26.1657 32.2065 24.0976 32.2065C21.1009 32.2065 19.1215 30.1644 19.1215 27.1013C19.1215 24.0753 21.1758 21.8815 24.0037 21.8815C26.8007 21.8815 28.6774 23.8298 28.7964 26.9691C28.8116 27.3701 28.6944 27.7245 28.1936 27.7245ZM24.0037 23.8291C22.8156 23.8291 21.9866 24.6613 21.8354 26.0236H26.0958C25.9824 24.8319 25.3411 23.8291 24.0037 23.8291ZM17.1869 32.2952H15.2265C14.7055 32.2952 14.7641 31.83 14.7641 31.7073V30.7064H14.766V25.8353C14.766 25.1643 14.6713 24.6859 14.4819 24.4001C14.2925 24.1143 13.9828 23.9716 13.5527 23.972C12.5089 23.972 11.8027 25.056 11.448 25.4948V31.5978H11.4455V31.7325C11.4455 31.8961 11.5053 32.2952 10.8955 32.2952H8.96029C8.43932 32.2952 8.49853 31.83 8.49853 31.7073V30.7064H8.50105V25.8353C8.50105 25.1643 8.40782 24.6859 8.22135 24.4001C8.03614 24.1149 7.73269 23.9722 7.31106 23.972C6.21304 23.972 5.53647 25.056 5.20574 25.4948V31.7325C5.20574 31.8961 5.26558 32.2952 4.65641 32.2952H2.69661C2.175 32.2952 2.23422 31.83 2.23422 31.7073V27.851C2.23422 25.3242 5.35882 22.8641 5.52324 22.6998C6.25525 22.0968 7.28901 21.7858 8.17851 21.7858C8.94643 21.7858 9.57179 21.9327 10.0545 22.2264C10.5373 22.5202 10.8985 22.9774 11.1381 23.5981C11.6252 23.0272 12.133 22.5821 12.6613 22.263C13.1879 21.9453 13.7925 21.7801 14.4075 21.7858C16.6288 21.7858 17.7392 23.0486 17.7388 25.5741V31.5978H17.7375V31.7325C17.7375 31.8961 17.7974 32.2952 17.1869 32.2952ZM2.23422 22.6394C2.23422 22.263 2.26194 22.0212 2.69976 22.0212H4.58271C5.081 22.0212 5.10683 22.3221 5.10683 22.6268V22.6891C4.16693 23.2217 3.15081 23.831 2.23422 25.1423V22.6394Z" fill="white" />
                <Path fillRule="evenodd" clipRule="evenodd" d="M11.4412 1.95217C11.2026 1.57112 10.8926 1.23961 10.5284 0.975824C10.1643 0.71999 9.76436 0.519322 9.34153 0.380319C8.87208 0.227594 8.38721 0.126898 7.89577 0.0800482C7.33347 0.0248191 6.76871 -0.0018651 6.20369 0.000101217H1.25095C0.805573 0.000101217 0.338775 0.29219 0.338775 0.844259V8.87666C0.966214 10.215 2.18833 11.6364 3.57739 12.3156V10.7223C3.57739 9.88196 4.2105 9.69438 4.47193 9.69438H5.93659C7.95373 9.69438 9.4931 9.27072 10.5548 8.42342C11.6163 7.57738 12.1471 6.32046 12.1474 4.65271C12.1505 4.17098 12.0946 3.69068 11.9811 3.2225C11.8684 2.77354 11.6862 2.34492 11.4412 1.95217ZM8.55534 6.07726C8.38456 6.37397 8.12962 6.61343 7.8227 6.76533C7.49014 6.92434 7.13075 7.01977 6.76311 7.04671C6.36307 7.08196 5.94981 7.09978 5.52333 7.10022H4.13176C3.79158 7.10022 3.57739 6.82261 3.57739 6.41407V3.12996C3.57739 2.7617 3.8174 2.60748 4.10529 2.60748H5.52333C5.98509 2.60748 6.41829 2.6207 6.82295 2.64714C7.18688 2.6637 7.54426 2.75005 7.87562 2.90145C8.17132 3.04201 8.41593 3.27102 8.5755 3.55676C8.74433 3.85073 8.82874 4.26515 8.82874 4.80001C8.82874 5.3439 8.73759 5.76965 8.55534 6.07726ZM3.57739 12.8349C2.04974 12.2237 1.02543 11.4954 0.338775 10.7733V14.651C0.338775 14.651 0.282078 15.283 0.897548 15.283H3.0583C3.65046 15.283 3.57739 14.651 3.57739 14.651V12.8349ZM34.1966 4.22528H32.2575C31.8632 4.22528 31.6036 4.39084 31.4474 4.82456C31.2899 5.25829 29.2356 10.9836 29.2356 10.9836C29.2356 10.9836 27.2695 5.37663 27.1152 4.94228C26.9609 4.50793 26.7063 4.22528 26.2484 4.22528H24.4668C23.8388 4.22528 23.8388 4.71944 23.9163 4.91521C23.9799 5.07322 26.4197 11.7629 27.3489 14.3111C27.5681 14.9123 27.6544 15.0936 27.6614 15.3164C27.6683 15.5392 27.4415 16.0076 27.2853 16.2758C27.213 16.3982 27.1304 16.5142 27.0383 16.6226C28.8602 16.0768 30.9598 14.0971 32.0459 11.9524C33.1193 8.96353 34.5355 5.01467 34.5966 4.81323C34.6955 4.4859 34.6942 4.22528 34.1966 4.22528ZM25.6348 17.1917C25.4665 17.1886 25.2985 17.1764 25.1315 17.1552C24.9267 17.1281 24.5443 17.1665 24.5443 17.5014V18.999C24.5443 19.5699 24.8177 19.6083 24.9677 19.6423C25.4202 19.7366 25.8818 19.7811 26.3441 19.7751C26.9564 19.7751 27.4894 19.6637 27.943 19.4409C28.4009 19.2141 28.8089 18.8982 29.143 18.5117C29.5115 18.0812 29.8228 17.6049 30.0691 17.0947C30.34 16.5464 30.5999 15.9425 30.849 15.283C30.849 15.283 30.9554 14.9853 31.1312 14.4968C30.5963 15.0369 28.0759 17.4277 25.6348 17.1917ZM22.7225 6.00299C22.6173 5.75283 22.4737 5.52067 22.2966 5.31494C22.1203 5.11741 21.9184 4.94424 21.6963 4.80001C21.4567 4.64404 21.2025 4.51185 20.9372 4.40533C20.6662 4.2997 20.3876 4.21489 20.1037 4.15163C19.7813 4.0808 19.4541 4.03388 19.1248 4.01126C18.7689 3.98482 18.3688 3.97139 17.9247 3.97097C14.9872 3.97097 13.3147 4.89969 12.9071 6.75714C12.7742 7.33313 13.3443 7.36713 13.3443 7.36713H15.151C15.6229 7.36713 15.6027 7.21542 15.8314 6.78862C15.9141 6.55646 16.0625 6.35332 16.2585 6.20379C16.6056 5.93688 17.1255 5.80343 17.8183 5.80343C18.4848 5.80343 18.969 5.93248 19.2709 6.19057C19.5729 6.44869 19.7505 6.84087 19.8039 7.36713C19.8039 7.97774 19.6136 8.38439 18.8766 8.38439C17.0781 8.31892 15.146 8.52288 14.0574 9.14671C12.9688 9.77054 12.354 10.9911 12.354 12.3017C12.354 12.8362 12.4496 13.3041 12.6406 13.7055C12.8256 14.099 13.0992 14.4444 13.44 14.7146C13.8018 14.9969 14.2165 15.2039 14.6596 15.3233C15.1632 15.4613 15.6835 15.5289 16.2056 15.5241C16.9873 15.5241 17.6782 15.4259 18.2781 15.2295C18.8778 15.0338 19.8058 14.3879 19.9242 14.2935V14.6378C19.9242 14.979 20.0275 15.283 20.4345 15.283H22.536C22.9612 15.283 23.0557 14.979 23.0557 14.6044V8.12945C23.0593 7.72701 23.0328 7.32489 22.9764 6.92648C22.9311 6.60915 22.8458 6.29887 22.7225 6.00299ZM19.8574 12.3521C19.8574 12.3521 19.315 13.4795 17.3785 13.4795C16.8456 13.4795 16.4124 13.3593 16.0789 13.1188C15.7454 12.8784 15.5788 12.5038 15.5788 11.9952C15.5788 11.3355 15.8498 10.8696 16.392 10.5977C16.9338 10.3258 18.0186 10.1709 18.8312 10.1898C19.6439 10.2087 19.8574 10.7223 19.8574 11.0774V12.3521Z" fill="white" />
            </G>

            <Defs>
                <ClipPath id="clip0">
                    <Rect width="34.7107" height="35" fill="white" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export function Click({ width }) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={width} height="33" viewBox="0 0 33 33" fill="none">
            <Path d="M16.6646 33C15.8542 32.9956 15.0487 32.874 14.2738 32.6389C13.424 32.3808 12.6026 32.0386 11.822 31.6175C10.7546 31.0741 9.73496 30.4434 8.7736 29.732C7.90832 29.061 7.09052 28.3321 6.32592 27.5503C5.29025 26.5249 4.32417 25.476 3.52974 24.5126C2.65108 23.4872 1.89242 22.3666 1.2682 21.1723L1.21543 21.0632V21.0598L1.20325 21.0345V21.0288V21.023L1.14179 20.8927L1.13773 20.8841L1.13367 20.8755L1.07568 20.7497L1.06814 20.7337V20.7291L1.02523 20.6349L1.01189 20.6056L1.00203 20.5832L0.993916 20.5654V20.562L0.949265 20.4615L0.944626 20.45L0.932449 20.4391L0.879679 20.3174L0.870981 20.2973L0.819372 20.1739L0.815893 20.1658L0.812413 20.1578L0.763703 20.0372L0.757905 20.0229L0.710934 19.904V19.9L0.704555 19.8839L0.659905 19.7691L0.655845 19.7576L0.650626 19.7444C0.636709 19.7077 0.623372 19.6709 0.609455 19.633V19.6256L0.601337 19.6032C0.58568 19.5607 0.573502 19.5257 0.562485 19.4947V19.4878L0.553786 19.4619L0.508556 19.3483L0.497538 19.315L0.462165 19.2093L0.456366 19.1927L0.451727 19.176C0.43897 19.137 0.428532 19.1031 0.418674 19.0721L0.408816 19.0394L0.380402 18.9464L0.375183 18.9286V18.9251L0.369384 18.905L0.34039 18.8132L0.335751 18.7977L0.331112 18.7741C0.321254 18.738 0.312556 18.7064 0.304438 18.6765L0.298639 18.6593L0.29342 18.6404C0.285881 18.6111 0.277183 18.5795 0.268485 18.5439L0.259787 18.5095V18.5014C0.253408 18.4756 0.24471 18.444 0.236591 18.4073L0.224414 18.3619C0.217455 18.3338 0.210497 18.3045 0.202958 18.2689L0.198319 18.2471L0.1931 18.2241C0.186142 18.1931 0.179763 18.1621 0.173384 18.1317L0.166426 18.0892C0.161787 18.0674 0.157728 18.0456 0.153089 18.0237V18.0123V18.0025V17.9991L0.14439 17.9531V17.9474L0.132213 17.8802C0.128154 17.859 0.124674 17.8377 0.121195 17.8165L0.109598 17.7464C0.106118 17.7263 0.103219 17.7063 0.0997395 17.689C0.0962603 17.6718 0.0922011 17.6391 0.0881419 17.6138L0.0846626 17.5891L0.0811833 17.5644C0.0771242 17.5352 0.073065 17.507 0.0695857 17.4777L0.0562485 17.433V17.4249C0.0504496 17.3916 0.0504497 17.3641 0.0446508 17.3388C0.0446508 17.3233 0.0411716 17.3078 0.0394319 17.2923V17.2866C0.0365325 17.259 0.0336331 17.2291 0.0307337 17.2016C0.0307337 17.1855 0.0278343 17.1689 0.0260946 17.1528V17.1493C0.0237751 17.1256 0.0216489 17.1019 0.019716 17.0782C0.019716 17.0569 0.0162367 17.0362 0.0150769 17.015C0.0139171 16.9938 0.0121775 16.9731 0.0104379 16.9524C0.0104379 16.9289 0.00753845 16.9053 0.00637869 16.8812C0.00521893 16.8571 0.00637869 16.8416 0.0028994 16.8238C-0.000579882 16.806 0.0028994 16.7762 0 16.7526V16.7492C0 16.7291 0 16.709 0 16.6889C0 16.6688 0 16.6573 0 16.6418V16.6188C0 16.597 0 16.5746 0 16.5528C0 16.531 0 16.5172 0 16.4994V16.3657C0 16.3381 0 16.3105 0 16.283C0 16.2635 0 16.2439 0 16.2256C0 16.2072 0 16.1768 0 16.1521C0 16.1383 0 16.1251 0 16.1113V16.0912C0 16.0602 -5.40056e-10 16.0338 0.00405917 16.0074C0.00405917 15.9919 0.00405917 15.9758 0.00405917 15.9603C0.00405917 15.9351 0.00695857 15.9081 0.0092781 15.8759C0.0092781 15.861 0.0092781 15.8455 0.0127574 15.8306C0.0127574 15.8019 0.0173964 15.7731 0.019716 15.7444V15.7163V15.6962C0.0224221 15.6675 0.0253215 15.6388 0.0284142 15.6101L0.0330532 15.5647V15.5556C0.0330532 15.5297 0.038852 15.5016 0.0434911 15.4683C0.0434911 15.4579 0.0434911 15.4476 0.0475502 15.4373V15.4224V15.4166C0.0510295 15.3879 0.0550887 15.3592 0.0591479 15.3305L0.0649467 15.2897C0.0695857 15.2587 0.0742248 15.2277 0.0788638 15.1973L0.0846626 15.1628V15.1577C0.0893017 15.129 0.0945206 15.0974 0.100899 15.0612L0.107858 15.021C0.113657 14.9877 0.120035 14.9539 0.126414 14.92L0.131633 14.8936V14.8792C0.138012 14.8459 0.14497 14.8115 0.151929 14.7782L0.157728 14.7495V14.7443C0.164686 14.711 0.172225 14.6766 0.179763 14.6427V14.6318L0.184402 14.6105C0.191361 14.579 0.199479 14.5457 0.208757 14.5066L0.216296 14.4762C0.224414 14.4435 0.233112 14.4079 0.24413 14.3642L0.248189 14.3487L0.251668 14.3361C0.261526 14.2976 0.271964 14.2586 0.283562 14.2161L0.286461 14.2052L0.289941 14.1931C0.301538 14.1512 0.311976 14.1139 0.321834 14.0783L0.329372 14.0519C0.33923 14.018 0.351408 13.9778 0.363585 13.9371V13.9325L0.369964 13.9118C0.382721 13.8705 0.395479 13.8303 0.407076 13.7935L0.413455 13.7734C0.426213 13.7338 0.44013 13.6913 0.456366 13.6431L0.459846 13.6322V13.6282C0.474343 13.5846 0.489999 13.5403 0.503917 13.4996L0.510875 13.4806C0.525372 13.4387 0.541029 13.3962 0.555526 13.3566L0.559005 13.3474L0.562485 13.3383C0.580461 13.29 0.595538 13.2504 0.609455 13.2125L0.615254 13.197C0.63207 13.154 0.649467 13.1092 0.667443 13.0638L0.670922 13.0552C0.688319 13.011 0.707455 12.9645 0.72891 12.9128L0.73297 12.9031C0.752686 12.8554 0.771242 12.8106 0.790958 12.767L0.797336 12.7521C0.814153 12.7124 0.832709 12.67 0.855325 12.6189L0.862283 12.6034C0.879679 12.5643 0.898816 12.5207 0.92375 12.4667L0.928969 12.4552C0.955064 12.3978 0.9771 12.3507 0.997395 12.3077C2.20587 9.73557 4.01278 7.94427 5.76344 6.21269L5.79823 6.17824C6.8165 5.17006 7.76693 4.30944 8.70343 3.54757C9.77452 2.66684 10.9158 1.87329 12.116 1.17468C12.7833 0.781569 13.4992 0.475873 14.2459 0.265249C14.8859 0.0901144 15.5467 0.00089989 16.2106 0C17.1034 0.00638075 17.9893 0.155668 18.834 0.442082C19.6422 0.715503 20.4244 1.05922 21.1715 1.46921C22.3646 2.1036 23.5092 2.82357 24.5962 3.62335C25.6194 4.37787 26.586 5.20467 27.4887 6.09729C28.4309 7.04102 29.2934 8.0597 30.0674 9.14306C30.7907 10.1103 31.3877 11.1641 31.8442 12.2796C32.1417 13.0596 32.3946 13.8557 32.6015 14.6639C32.7819 15.3665 32.8834 16.0866 32.9042 16.8112C32.9185 17.5213 32.8316 18.2298 32.6461 18.9159C32.4277 19.701 32.1173 20.458 31.7212 21.1717C31.1572 22.219 30.4972 23.2128 29.7496 24.1406C29.0051 25.0512 28.2082 25.9187 27.3628 26.7385C26.4496 27.6426 25.4875 28.497 24.4808 29.298C23.4272 30.1379 22.3222 30.9126 21.172 31.6175C19.8324 32.4922 18.2691 32.9717 16.6646 33V33ZM19.132 29.3428C18.4629 29.7327 17.7402 30.0243 16.9865 30.2086C17.7402 30.0244 18.463 29.7327 19.132 29.3428V29.3428ZM9.28795 28.0257C9.35812 28.0728 9.4306 28.1204 9.50309 28.167C9.42307 28.1153 9.3529 28.0688 9.28795 28.0257ZM6.8397 26.003L6.96321 26.1219L6.8397 26.003ZM8.02091 14.4429L7.98264 14.525V14.5313L7.94843 14.6071L7.94495 14.6157L7.91248 14.6898V14.6938V14.6978L7.88058 14.7736V14.7787L7.84869 14.8574V14.8609L7.8197 14.9349V14.9401V14.9447L7.7936 15.0141L7.79012 15.0228L7.76519 15.0917V15.0974V15.102C7.75707 15.1238 7.74953 15.1473 7.74083 15.1732V15.1789C7.73097 15.2082 7.72344 15.23 7.71706 15.2513L7.71358 15.2622L7.69328 15.3282L7.68922 15.342C7.68265 15.363 7.67627 15.3841 7.67009 15.4051V15.4126V15.4201L7.65211 15.4832L7.62254 15.5016L7.61906 15.5154L7.60514 15.567L7.60108 15.5825C7.59586 15.6032 7.59064 15.6239 7.58542 15.6445L7.58136 15.6612L7.56803 15.7186L7.56455 15.7347L7.55991 15.7565L7.55237 15.7915V15.8007V15.8105L7.54251 15.8581V15.8673L7.53091 15.8972L7.52396 15.9339L7.52048 15.9534V15.962V15.9741C7.51758 15.9919 7.51468 16.0091 7.51178 16.0269L7.5083 16.0487L7.50076 16.1004L7.49728 16.1222C7.49728 16.1394 7.49264 16.1561 7.49032 16.1733V16.1865V16.1997C7.49032 16.2158 7.48626 16.2319 7.48452 16.248V16.264V16.2784V16.2939C7.48452 16.3048 7.48452 16.3157 7.48163 16.326V16.353V16.3674C7.48163 16.3783 7.48163 16.3898 7.48163 16.4007C7.48163 16.4116 7.48163 16.4173 7.48163 16.4259C7.48163 16.4345 7.48163 16.4558 7.47873 16.4707C7.47873 16.4765 7.47873 16.4822 7.47873 16.4885V16.4989C7.47873 16.5138 7.47873 16.5287 7.47873 16.5442C7.47873 16.5597 7.47873 16.566 7.47873 16.5769C7.47873 16.5896 7.47873 16.6028 7.47873 16.6154V16.6516C7.47873 16.6659 7.47873 16.6803 7.47873 16.6946V16.7985C7.47873 16.8106 7.47873 16.8232 7.47873 16.8353C7.47873 16.8473 7.47873 16.8611 7.47873 16.8743V16.9076C7.47873 16.9214 7.47873 16.9352 7.47873 16.949V16.9656V16.9823C7.47873 16.9915 7.47873 17.0001 7.47873 17.0093V17.023V17.0408V17.0581C7.47873 17.0695 7.47873 17.0816 7.47873 17.0931V17.1126V17.1338V17.1603C7.47873 17.1758 7.48163 17.1913 7.48336 17.2068C7.48336 17.2131 7.48336 17.2188 7.48336 17.2251V17.2355C7.48336 17.2515 7.48684 17.267 7.48916 17.2825V17.2946V17.3107L7.49264 17.3348L7.49554 17.3566L7.4996 17.3842V17.3979L7.50366 17.4244V17.4381V17.4548L7.50714 17.4743V17.491V17.5076L7.51062 17.5265L7.51816 17.5656V17.5765L7.52222 17.5983V17.6092L7.52802 17.6391L7.53265 17.6609C7.53613 17.6781 7.53981 17.6952 7.54367 17.712L7.54889 17.7367L7.55701 17.7717L7.56049 17.7878V17.7998V17.8107L7.57267 17.8613L7.57847 17.8848C7.58368 17.9055 7.58832 17.9227 7.59238 17.9382L7.59818 17.96L7.61268 18.0123L7.61558 18.0226L7.61848 18.0329C7.62312 18.0502 7.62833 18.0668 7.63297 18.084L7.63935 18.1064L7.65501 18.1587L7.65791 18.1684V18.177L7.67589 18.2345V18.2431V18.2523L7.68516 18.2798L7.69502 18.3091L7.69908 18.3206V18.3275L7.71416 18.3717L7.7188 18.3849L7.72518 18.4027V18.4107L7.74315 18.4612L7.74895 18.4779L7.77215 18.5399L7.77562 18.5485V18.5542L7.80056 18.6191L7.8052 18.6306L7.83129 18.6966L7.83477 18.7047L7.85797 18.7621L7.86203 18.7718V18.7759V18.781C7.87131 18.8034 7.88116 18.8264 7.89102 18.8494L7.8945 18.858L7.92349 18.9257L7.92755 18.9355L7.95017 18.9866L7.95655 19.0009L7.96235 19.0136L7.99308 19.0819V19.0859L7.99656 19.0934L8.02903 19.1634V19.1691V19.1732L8.03831 19.1927L8.06325 19.2461V19.2495L8.07542 19.2742L8.09978 19.3253C8.85694 20.6352 9.80258 21.8291 10.907 22.8694C11.7833 23.7935 12.8167 24.5579 13.9601 25.1281C14.7778 25.6026 15.7027 25.8665 16.6501 25.8957C17.5414 25.8801 18.4098 25.6138 19.154 25.1281C20.4012 24.3579 21.5549 23.4487 22.5927 22.4182C23.5573 21.5182 24.3743 20.4749 25.0143 19.3259C25.9653 17.5644 25.7833 16.283 25.0828 14.3883C24.5149 13.1251 23.7151 11.9772 22.7238 11.0033C21.6871 9.98144 20.5049 9.11528 19.2149 8.43229C18.3792 7.93915 17.433 7.65885 16.4611 7.61644C15.6625 7.62481 14.8811 7.8468 14.1995 8.2589C12.9115 9.02876 11.7316 9.96325 10.6901 11.0383L10.6716 11.0566C9.58774 12.0166 8.69022 13.1646 8.02323 14.444L8.02091 14.4429ZM6.46567 25.6385L6.68081 25.8497L6.46567 25.6385ZM25.3501 24.3811C25.1813 24.5534 25.0021 24.7336 24.8114 24.9231C24.5881 25.1441 24.3591 25.364 24.1265 25.5805C24.3585 25.364 24.5904 25.1441 24.8114 24.9231C25.0033 24.7325 25.1819 24.5522 25.3501 24.38V24.3811ZM28.7389 19.8294C28.6983 19.908 28.6566 19.9879 28.6136 20.0677C28.3334 20.5882 28.0256 21.0937 27.6916 21.5822C28.0256 21.0937 28.3334 20.5882 28.6136 20.0677C28.6571 19.9867 28.6966 19.9069 28.7395 19.8277L28.7389 19.8294ZM29.1228 13.4732C29.3326 14.1126 29.4865 14.7688 29.5826 15.4344C29.4878 14.768 29.3339 14.1112 29.1228 13.4714V13.4732ZM24.0337 6.08581C24.3388 6.3568 24.6347 6.63449 24.9215 6.91887C25.7437 7.74213 26.4962 8.63081 27.1715 9.57596C27.4649 9.98704 27.7299 10.3895 27.959 10.773C27.1072 9.37171 26.0873 8.07759 24.9215 6.91887C24.6355 6.63372 24.3395 6.35603 24.0337 6.08581ZM18.747 2.54226C18.9586 2.64331 19.1761 2.75354 19.4109 2.8787C20.0621 3.22318 20.7029 3.6044 21.3147 4.00458C20.7041 3.60268 20.0633 3.22605 19.4115 2.8787C19.1761 2.75584 18.9592 2.64101 18.747 2.54226ZM8.41059 18.3619C8.30124 18.1099 8.20903 17.851 8.13457 17.5868C8.04124 17.259 7.98808 16.9213 7.97626 16.581C8.00849 17.1958 8.15597 17.7993 8.41117 18.3608L8.41059 18.3619Z" fill="white" />
        </Svg>
    )
}
