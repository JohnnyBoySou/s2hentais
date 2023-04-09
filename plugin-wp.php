

function register_like_route() {
    register_rest_route( 'like', '/post/(?P<id>\d+)', array(
        'methods' => 'POST',
        'callback' => 'add_like_to_post_rest',
    ) );
	
	 register_rest_route( 'views', '/post/(?P<id>\d+)', array(
		'methods' => 'POST',
		'callback' => 'add_view_to_post_rest',
  	) );
	
	register_rest_route( 'likes', '/total/(?P<user_id>\d+)', array(
		'methods' => 'GET',
		'callback' => 'get_user_total_likes_endpoint',
  	) );
	register_rest_route( 'views', '/total/(?P<user_id>\d+)', array(
		'methods' => 'GET',
		'callback' => 'get_user_total_views_endpoint',
  	) );
}
add_action( 'rest_api_init', 'register_like_route' );


function add_like_to_post_rest( $request ) {
    $post_id = $request['id'];
   	$post = get_post( $post_id );

    if ( ! $post ) {
        return new WP_Error( 'invalid_post_id', 'Invalid post ID', array( 'status' => 404 ) );
    }
	
	
    $current_likes = get_post_meta( $post_id, 'like', true );
    $new_likes = intval( $current_likes ) + 1;

    update_post_meta( $post_id, 'like', $new_likes );

    $response = array(
        'status' => 'success',
        'message' => 'Like added to post with ID ' . $post_id,
        'total_likes' => $new_likes,
    );
    return new WP_REST_Response( $response, 200 );
}




function add_view_to_post_rest( $request ) {
    $post_id = $request['id'];
    $post = get_post( $post_id );

    if ( ! $post ) {
        return new WP_Error( 'invalid_post_id', 'Invalid post ID', array( 'status' => 404 ) );
    }

    $current_views = get_post_meta( $post_id, 'views', true );
    $new_views = intval( $current_views ) + 1;

    update_post_meta( $post_id, 'views', $new_views );


    $response = array(
        'status' => 'success',
        'message' => 'View added to post with ID ' . $post_id,
        'total_views' => $new_views,
    );
    return new WP_REST_Response( $response, 200 );
}



function get_user_total_likes( $user_id ) {
    // Obter todos os posts publicados pelo usuário
    $args = array(
        'author' => $user_id,
        'post_type' => 'post',
        'posts_per_page' => -1,
    );
    $posts = get_posts( $args );

    $total_likes = 0;

    // Iterar sobre cada post e coletar o número de likes
    foreach ( $posts as $post ) {
        $likes = get_post_meta( $post->ID, 'like', true );
        if ( $likes ) {
            $total_likes += intval( $likes );
        }
    }

    return $total_likes;
}

function get_user_total_views( $user_id ) {
    // Obter todos os posts publicados pelo usuário
    $args = array(
        'author' => $user_id,
        'post_type' => 'post',
        'posts_per_page' => -1,
    );
    $posts = get_posts( $args );

    $total_views = 0;

    // Iterar sobre cada post e coletar o número de views
    foreach ( $posts as $post ) {
        $views = get_post_meta( $post->ID, 'views', true );
        if ( $views ) {
            $total_views += intval( $views );
        }
    }

    return $total_views;
}



function get_user_total_likes_endpoint( $request ) {
    $user_id = $request->get_param( 'user_id' );
    $total_likes = get_user_total_likes( $user_id );

    $response = array(
        'user_id' => $user_id,
        'total_likes' => $total_likes,
    );
    return new WP_REST_Response( $response, 200 );
}



function get_user_total_views_endpoint( $request ) {
    $user_id = $request->get_param( 'user_id' );
    $total_views = get_user_total_views( $user_id );

    $response = array(
        'user_id' => $user_id,
        'total_views' => $total_views,
    );
    return new WP_REST_Response( $response, 200 );
}