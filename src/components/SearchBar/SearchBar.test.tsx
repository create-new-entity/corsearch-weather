

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchBar } from './SearchBar';

test('calls onSearch with trimmed query when submitted', async () => {
  const user = userEvent.setup();
  const onSearch = vi.fn();
  const onRemove = vi.fn();

  render(
    <SearchBar
      city={null}
      onSearch={onSearch}
      onRemove={onRemove}
      error = ''
    />
  );

  await user.type(screen.getByLabelText(/search city/i), '  Helsinki  ');
  await user.click(screen.getByRole('button', { name: /search/i }));

  expect(onSearch).toHaveBeenCalledWith('Helsinki');
});

test('does not call onSearch for empty input', async () => {
  const user = userEvent.setup();
  const onSearch = vi.fn();
  const onRemove = vi.fn();

  render(
    <SearchBar
      city={null}
      onSearch={onSearch}
      onRemove={onRemove}
      error = ''  
    />
  );

  await user.click(screen.getByRole('button', { name: /search/i }));

  expect(onSearch).not.toHaveBeenCalled();
});