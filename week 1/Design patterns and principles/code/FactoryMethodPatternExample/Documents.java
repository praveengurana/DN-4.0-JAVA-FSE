public interface Documents {
    public void print();
}


class ExcelDocument implements Documents{
    public void print(){
        System.out.println("Excel printing");
    }
}

class WordDocument implements Documents{
    public void print(){
        System.out.println("Word printing\n");
    }
}

class PdfDocument implements Documents {
    public void print(){
        System.out.println("pdf printing\n");
    }
}
