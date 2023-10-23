import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { SearchInput, SearchLabel } from './ContactFilter.styled';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);

  return (
     <SearchLabel htmlFor="filter">
      <SearchInput
        type="text"
        name="filter"
        value={filterValue}
        onChange={event => dispatch(setFilter(event.target.value))}
      />
    </SearchLabel>
  );
};
