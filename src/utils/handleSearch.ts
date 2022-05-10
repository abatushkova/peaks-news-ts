import { FormEvent } from "react";

export const handleSearch = (evt:FormEvent) => {
  const searchForm = document.getElementById('search-form') as HTMLFormElement;
  const searchFormQuery = document.getElementById('search-query') as HTMLInputElement;
  const searchFormSubmit = document.getElementById('search-submit') as HTMLButtonElement;
  const classActive = 'is-active';

  const show = () => {
    if (searchForm.classList.contains(classActive)) return;

    searchForm.classList.add(classActive);
    searchFormQuery.focus();
  };

  const hide = () => {
    if (!searchForm.classList.contains(classActive) || searchFormQuery.value !== '') {
      return;
    }

    searchForm.classList.remove(classActive);
    searchFormQuery.blur();
  };

  const submit = () => {
    if (searchForm.classList.contains(classActive)) {
      if (searchFormQuery.value === '') {
        hide();
        evt.preventDefault();
      }
    } else {
      show();
      searchFormQuery.focus();
      evt.preventDefault();
    }

    searchForm.removeEventListener('submit', submit, false);
    searchFormQuery.removeEventListener('focus', show, false);
    searchFormQuery.removeEventListener('blur', hide, false);
    searchFormSubmit.removeEventListener('mousedown', mousedown, false);
  };

  const mousedown = (evt:Event) => {
    evt.preventDefault();
  };

  searchForm.addEventListener('submit', submit, false);
  searchFormQuery.addEventListener('focus', show, false);
  searchFormQuery.addEventListener('blur', hide, false);
  searchFormSubmit.addEventListener('mousedown', mousedown, false);
};
