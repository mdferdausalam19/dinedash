export default function NoOrdersFound() {
  return (
    <div className="bg-cardbg mt-4 p-10 rounded-xl text-center">
      <p className="text-xl font-semibold mb-2">No Orders Yet!</p>
      <p className="text-base">
        It looks like you haven't placed any orders. Start by adding items in
        the 'CREATE ORDER' section.
      </p>
    </div>
  );
}
