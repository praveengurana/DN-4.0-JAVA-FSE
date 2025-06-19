public abstract class DocumentFactory {
    public abstract Documents createDocument();
}

class PdfFactory extends DocumentFactory{
    @java.lang.Override
    public Documents createDocument() {
        return new PdfDocument();
    }
}

class ExcelFactory extends DocumentFactory{
    @java.lang.Override
    public Documents createDocument() {
        return new ExcelDocument();
    }
}

class WordFactory extends DocumentFactory{
    @java.lang.Override
    public Documents createDocument() {
        return new WordDocument();
    }
}