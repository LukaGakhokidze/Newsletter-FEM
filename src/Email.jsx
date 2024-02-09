function Email({ email, onSetEmail, isValid, onSubmit }) {
  return (
    <form className="mt-10 flex flex-col gap-2 px-6" onSubmit={onSubmit}>
      <label htmlFor="Email" className="text-xs1 font-bold ">
        {isValid ? (
          <span>Email address</span>
        ) : (
          <div className="flex justify-between">
            <span>Email Address</span>{" "}
            {!isValid && (
              <span className="text-primary">Valid email required</span>
            )}
          </div>
        )}
      </label>
      <input
        onChange={onSetEmail}
        value={email}
        required
        autoComplete="email"
        placeholder="email@company.com"
        className={`h-14 rounded-lg border-[1px]
       p-6 hover:cursor-pointer hover:border-charcoal_grey
      active:border-dark_slate_grey  ${isValid ? "border-grey bg-white active:text-dark_slate_grey" : "border-primary bg-primary/15 text-primary"}`}
      />
      <button
        type="submit"
        className=" mt-6 rounded-lg bg-dark_slate_grey from-[#FF527B] to-[#FF6A3A]  py-4  font-bold text-white hover:cursor-pointer hover:bg-gradient-to-tr hover:shadow-custom hover:shadow-primary/50 desktop:px-16"
      >
        Subscribe to monthly newsletter
      </button>
    </form>
  );
}

export default Email;
