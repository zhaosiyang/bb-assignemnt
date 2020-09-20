export enum SortKey {
  Date = 1,
  Beneficiary,
  Amount,
}

export enum SortDirection {
  Asc = 1,
  Desc,
}

export function getSortKeyLabel(sortKey: SortKey): string {
  const map = {
    [SortKey.Date]: 'Date',
    [SortKey.Beneficiary]: 'Beneficiary',
    [SortKey.Amount]: 'Amount',
  };
  return map[sortKey];
}
