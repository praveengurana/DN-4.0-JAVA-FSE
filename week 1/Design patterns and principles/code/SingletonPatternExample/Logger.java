public class Logger {

    private static Logger instance;

    private Logger(){ }

    public static Logger getInstance(){
        if(instance == null){
            instance = new Logger();
        }
        return instance;
    }
}

class Main{
    public static void main(String[] args) {
        Logger obj1 = Logger.getInstance();
        Logger obj2 = Logger.getInstance();
        Logger obj3 = Logger.getInstance();

        System.out.println(obj1 == obj2);
        System.out.println(obj3 == obj2);
        System.out.println(obj1 == obj3);
    }
}
