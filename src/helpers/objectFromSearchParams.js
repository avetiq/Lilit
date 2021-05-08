const objectFromSearchParams = (search) => {
  return JSON.parse(
    '{"' + search.slice(1).replace(/&/g, '","').replace(/=/g, '":"') + '"}',
    function (key, value) {
      return key === "" ? value : decodeURIComponent(value);
    }
  );
};

export default objectFromSearchParams;
