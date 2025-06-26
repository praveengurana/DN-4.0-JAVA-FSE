package org.example;




import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;

public class MyServiceInteractionTest {

    @Test
    public void testVerifyGetDataCalled() {

        ExternalApi mockApi = mock(ExternalApi.class);

        when(mockApi.getData()).thenReturn("Mocked Value");

        // Inject mock into service
        MyService service = new MyService(mockApi);

        
        service.fetchData();

        
        verify(mockApi).getData();
    }
}
