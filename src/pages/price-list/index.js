import React from "react";
import Layout from "@theme/Layout";

export default function MyReactPage() {
  return (
    <Layout>
      <h1>Bonsai Price List</h1>
      <p>December21</p>
    <div id="myExcelDiv" style="width: 402px; height: 346px"></div>
<!-- * This code uses the Microsoft Office Excel Javascript object model to programmatically insert the
	 * Excel Web App into a div with id=myExcelDiv. The full API is documented at
	 * https://msdn.microsoft.com/en-US/library/hh315812.aspx. There you can find out how to programmatically get
	 * values from your Excel file and how to use the rest of the object model. -->
<script type="text/javascript" src="https://onedrive.live.com/embed?resid=6992D7E136F5BA68%21415&authkey=%21AGrkEKTIWAv5Id8&em=3&wdDivId=%22myExcelDiv%22&wdDownloadButton=1&wdHideGridlines=1&wdHideHeaders=1&wdAllowInteractivity=0"></script>
    </Layout>
  );
}
