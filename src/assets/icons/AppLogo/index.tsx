import { SvgIcon, SvgIconProps } from "@mui/material";

export function AppLogo(props: SvgIconProps) {
    return (
      <SvgIcon {...props}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.5 11.85c.3 5.775-4.913 10.65-11.213 10.65-6.3 0-11.887-5.175-11.249-10.912C1.938 3.525 7.9 3 12.287 3 14.95 3 22.825.675 23.5 11.85Z" fill="#EF4D3C"/>
            <path d="M4.375 10.125c2.325-3.6 6.3-2.55 7.35-3.9 0 2.588 1.875 1.312 2.812 2.475 1.201 1.5 1.651 4.163 3.076 4.687-1.388-2.962.862-2.85-2.288-6.824 1.687 1.049 2.55 0 4.838.937-1.988-3.15-5.1-2.25-5.1-2.25s1.949-1.8 3.6-.862c-1.725-2.551-6.713.675-6.713.675s-2.063-3.525-6.487.187c2.587-1.05 5.437 0 5.437 0s-4.687-1.162-6.525 4.875Z" fill="#8CC63E"/>
            <path d="M4.375 10.125s2.737-5.062 7.463-4.612C7.675 3.6 4.375 7.65 4.375 10.125Z" fill="#64892F"/>
            <path d="M5.463 5.25s3.449-2.587 6.487 0c-.9-3.15-5.512-1.687-6.487 0Zm7.237.338c4.575 2.1 3.038 4.5 4.913 7.875-1.276-2.813 1.875-7.875-4.913-7.875Z" fill="#64892F"/>
            <path d="M10.9 5.25s1.05-1.575 1.425-3.525c.038-.263 1.163-.225 1.125.037-.375 2.513.638 3.9.638 3.9s-.788.263-1.763.263c-.975.038-1.425-.675-1.425-.675Z" fill="#64892F"/>
            <path d="M12.887 1.95c.311 0 .563-.101.563-.225s-.252-.225-.563-.225c-.31 0-.562.101-.562.225s.252.225.562.225Z" fill="#8CC63E"/>
        </svg>
    </SvgIcon>
    );
  }