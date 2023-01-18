export const CardConfigCos = () => {
  return (
    <div className="flex justify-center">
      <form className="flex  m-4 max-w-2xl rounded-xl border border-gray-200 p-6 text-left text-inherit transition-colors hover:border-blue-600 hover:text-blue-600 focus:border-blue-600 focus:text-blue-600 active:border-blue-600 active:text-blue-600">
        <label htmlFor="secretId">Secret Id:</label>
        <input className="ml-4" type="text" />
        <label htmlFor="secretId">Secret Key:</label>
        <input className="ml-4" type="text" />
      </form>
    </div>
  )
}
