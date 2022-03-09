const formatDate = (date?: string | null) => (
  date
  ? (new Date(date)).toLocaleDateString()
  : null
);

export default formatDate;
