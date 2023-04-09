
export const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "#F1F3FF" : "#072942",
   fontFamily: "Font_Medium, sans-serif",
   fontSize: 18,
  }),
  control: () => ({
    border: '2px solid #00000020',
    display: 'flex',
    minWidth: 180,
    borderRadius: 5,  
    fontFamily: "Font_Medium, sans-serif",
    flexDirection: 'row',
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
  }),
  indicatorSeparator: () => ({
    width: 0,
    display: 'none'
  }),

  dropdownIndicator : () => ({
    color: "#000",
    fontSize: 28,
    marginRight: 5,
    marginLeft: -5,
  })
}
