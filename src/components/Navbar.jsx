

const Navbar = () => {
  return (
    <div className="flex justify-center items-center px-16 py-2 max-md:px-5">
      <div className="flex justify-between items-center w-full max-md:flex-wrap max-md:w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd4a16a5d19c0a2b5ddc8387fee3caf19f88a18c4d3213f90f0b4882c9363196?apiKey=a0a445c9bef54c46aae68891e3ca9f55&"
          className="shrink-0 self-stretch max-w-full aspect-[2.5] w-[100px]"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/30dbab4e73010fbe7d85117c7496c6a7c44ed2b31cdf13aeae46f7c93f2e70b7?apiKey=a0a445c9bef54c46aae68891e3ca9f55&"
          className="shrink-0 self-stretch my-auto w-5 aspect-square sr-only sm:not-sr-only "
        />
        <div className="">
          <div>Menu</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d565419413071a0914e3e529897719f58c23dc74dacf5704e302857cbda958e8?apiKey=a0a445c9bef54c46aae68891e3ca9f55&"
            className="shrink-0 my-auto w-5 aspect-square"
          />
        </div>
      </div>
    </div>
  )
}

export default Navbar