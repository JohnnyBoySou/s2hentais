
export const customStyles = {
  option: (provided, state) => ({
    ...provided,
   fontFamily: "Font_Medium, sans-serif",
   fontSize: 18,
   color: "#fff",
  }),
  control: () => ({
    display: 'flex',
    minWidth: 180,
    color: "#fff",
    borderRadius: 5,  
    background: "#2F2F2F",
    fontFamily: "Font_Medium, sans-serif",
    flexDirection: 'row',
    fontSize: 18,
    marginTop: 15,
    marginBottom: 10,
  }),
  indicatorSeparator: () => ({
    width: 0,
    display: 'none'
  }),

  dropdownIndicator : () => ({
    color: "#fff",
    fontSize: 28,
    marginRight: 5,
    marginLeft: -5,
  }),
  menu: () => ({
    background: "#2F2F2F",
    color: "#fff",
  }),

}
