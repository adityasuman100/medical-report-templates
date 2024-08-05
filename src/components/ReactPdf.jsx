import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import { useState } from "react";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    // flexGrow: 1,
    display: "flex",
    flexDirection: "row",
  },
  topTable: {
    margin: 10,
    padding: 10,
    display: "flex",
    flexDirection: "row",
    gap: "2px",
  },
  topTableData: {
    width: "16%",
    fontSize: "10px",
  },
  measurementCol: {
    width: "20%",
    fontSize: "10px",
  },
  valuesCol: {
    width: "15%",
    fontSize: "10px",
  },
  normalValCol: {
    width: "15%",
    fontSize: "10px",
  },
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.topTable}>
        <Text style={styles.measurementCol}>MEASUREMENTS</Text>
        <Text style={styles.valuesCol}>VALUES</Text>
        <Text style={styles.normalValCol}>NORMAL Val.</Text>
        <Text style={styles.measurementCol}>MEASUREMENTS</Text>
        <Text style={styles.valuesCol}>VALUES</Text>
        <Text style={styles.normalValCol}>NORMAL Val.</Text>
      </View>
    </Page>
  </Document>
);

function ReactPdf() {
  const [pdfUrl, setPdfUrl] = useState(null);

  return (
    <div>
      <PDFViewer>
        <MyDocument />
      </PDFViewer>
      <div>
        <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
          {({ blob, url, loading, error }) => {
            setPdfUrl(url);
            return loading ? "Loading document..." : "Download now!";
          }}
        </PDFDownloadLink>
      </div>
      {pdfUrl && (
        <button>
          <a href={pdfUrl}>View Pdf</a>
        </button>
      )}
    </div>
  );
}

export default ReactPdf;
