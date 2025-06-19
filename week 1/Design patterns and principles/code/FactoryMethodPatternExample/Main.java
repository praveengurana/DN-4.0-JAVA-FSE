public class Main {
    public static void main(String[] args) {

        DocumentFactory pdffac = new PdfFactory();
        Documents pdfdoc = pdffac.createDocument();
        pdfdoc.print();

        DocumentFactory wordfac = new WordFactory();
        Documents worddoc = wordfac.createDocument();
        worddoc.print();

        DocumentFactory excelfac = new ExcelFactory();
        Documents exceldoc = excelfac.createDocument();
        exceldoc.print();
    }
}
