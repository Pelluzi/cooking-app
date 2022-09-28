import { SvgIcon, SvgIconProps } from "@mui/material";

export function DotIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 3c3.183 0 6.235-1.264 8.485-3.515a11.996 11.996 0 0 0 0-16.97 11.996 11.996 0 0 0-16.97 0 11.996 11.996 0 0 0 0 16.97A11.996 11.996 0 0 0 12 24Z" fill="#000" fillOpacity=".87"/>
      </svg>
    </SvgIcon>
  );
}