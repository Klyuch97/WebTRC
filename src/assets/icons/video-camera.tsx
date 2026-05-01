type VideoCameraIconProps = {
  className?: string;
};

export const VideoCameraIcon = ({ className }: VideoCameraIconProps) => {
  return (
    <svg
      className={className}
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 9C3 7.34315 4.34315 6 6 6H15C16.6569 6 18 7.34315 18 9V21C18 22.6569 16.6569 24 15 24H6C4.34315 24 3 22.6569 3 21V9Z"
        fill="currentColor"
      />
      <path
        d="M21.8292 10.6584C21.321 10.9124 21 11.4318 21 12V18C21 18.5682 21.321 19.0876 21.8292 19.3416L24.8292 20.8416C25.2942 21.0741 25.8464 21.0493 26.2886 20.776C26.7308 20.5027 27 20.0199 27 19.5V10.5C27 9.98014 26.7308 9.49734 26.2886 9.22403C25.8464 8.95072 25.2942 8.92587 24.8292 9.15836L21.8292 10.6584Z"
        fill="currentColor"
      />
    </svg>
  );
};
