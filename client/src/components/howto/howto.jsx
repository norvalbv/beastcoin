import "./howto.scss";

export default function HowTo() {
  return (
    <div className="how-to gradient-bg-transactions" id="howto">
      <h2 className="text-3xl sm:text-4xl text-white text-gradient py-1 mb-10">How To Buy $BEAST on PancakeSwap</h2>
      <p>First, download and install the MetaMask extension to your internet browser.
        Connect Binance Smart Chain with your MetaMask. Make sure you have BNB coins in your MetaMask wallet.
        Add $BEAST to MetaMask.
        <br />
        <br />
        Token Contract Address: <span className="contract">0xed362fd6e1e92d0fca1606462ceced538671531d</span>
        <span className="contract-2">0xed362fd6e1e92d0fca16<br />06462ceced538671531d</span>
        Token Symbol: $BEAST
        <br />
        {/* Decimals of Precision: 9
        <br /> */}
        <br />
        Connect MetaMask with PancakeSwap. Go to PancakeSwap click on the Connect button on the top right corner of your screen. Select a currency, paste the $BEAST token contract address and add it to the exchange.
        The last step is to swap your BNB for $BEAST. Put in the amount you wish to swap and click on “Swap”.
        If your transaction fails, you may want to adjust your Slippage Rate to a higher amount.
        After a successful swap, your MetaMask Extension will pop up asking you to confirm the transaction.
        <br />
        <br />
        <span className="congratulations">Congratulations</span> You are now the owner of $BEAST tokens.
      </p>
    </div>
  );
}
